//Framework functions
{
  function getCursorPosition (e, arg0_image) {
    //Declare local instance variables
    e = e || window.event;
    var img_bounds = arg0_image.getBoundingClientRect();
    var pan_x = 0;
    var pan_y = 0;

    //Calculate pan_x and pan_y coordinates

    pan_x = e.pageX - img_bounds.left;
    pan_y = e.pageY - img_bounds.top - window.pageYOffset + img_bounds.height/2;

    //Return object
    return { x : pan_x, y: pan_y };
  }

  function isMagnifierMaximised (arg0_element_id) {
    //Convert from parameters
    var element_id = arg0_element_id;

    //Return statement
    return (document.querySelectorAll(`.${element_id}-panel.maximised .image-magnifier-glass`).length != 0);
  }

  function magnify (arg0_element_id, arg1_zoom) {
    //Convert from parameters
    var element_id = arg0_element_id;
    var local_el = document.getElementById(arg0_element_id);
    var zoom = arg1_zoom;

    //Declare global instance variables
    window[element_id + "_zoom"] = zoom;
    var local_zoom = window[element_id + "_zoom"];

    //Create magnifying glass element
    var local_magnifier = document.createElement("DIV");
    local_magnifier.setAttribute("class", "image-magnifier-glass");
    local_magnifier.style.backgroundImage = `url('${local_el.src}')`;
    local_magnifier.style.backgroundRepeat = "no-repeat";

    local_el.parentElement.insertBefore(local_magnifier, local_el);

    //Dynamic movement events - PC
    local_el.addEventListener("mousemove", (e) => moveMagnifier(e, element_id, local_magnifier));

    //Dynamic movement events - Mobile
    local_el.addEventListener("touchmove", (e) => moveMagnifier(e, element_id, local_magnifier));

    //Dynamic zoom
    local_el.addEventListener("wheel", (e) => {
      local_zoom += e.deltaY*-0.0025;

      //Restrict zoom between 1.25-10
      local_zoom = Math.min(Math.max(1.25, local_zoom), 10);
      window[element_id + "_zoom"] = local_zoom;

      e.preventDefault();
    });

    //Hide magnifier if image is not hovered on
    setInterval(function(){
      local_magnifier.style.opacity = (document.querySelectorAll(`#${element_id}:hover`).length != 0 && window[element_id.replace(/-/gm, "_") + "_active_preview"] != false) ? 1 : 0;
    }, 0);
  }

  function moveMagnifier (e, arg0_element_id, arg1_magnifier, arg2_zoom) {
    //Convert from parameters
    var element_id = arg0_element_id;
    var local_el = document.getElementById(arg0_element_id);
    var magnifier = arg1_magnifier;
    var zoom = window[arg0_element_id + "_zoom"];

    //Declare local instance variables
    var local_bounds = local_el.getBoundingClientRect();
    var position = getCursorPosition(e, local_el);

    var pan_x = position.x;
    var pan_y = position.y;

    var h = magnifier.offsetHeight/2;
    var w = magnifier.offsetWidth/2;

    var aspect_ratio_change = (window.innerWidth/window.innerHeight - 1.4071)/0.49154;
    var x_change = 0.575*aspect_ratio_change;
    var y_change = 0.55*aspect_ratio_change;

    var offset_x = pan_x-w/(1.25 + 0.15*aspect_ratio_change);
    var offset_y = pan_y-h/0.8;

    //Maximisation adjustments
    if (isMagnifierMaximised(element_id)) {
      offset_x = pan_x+w*(1.125 + x_change);
      offset_y = pan_y-h*(1.65 + y_change);
    }

    //Prevent magnifier from going outside of image
    if (document.querySelector(`#${element_id}:hover`).length != 0) {
      magnifier.style.left = `${offset_x}px`;
      magnifier.style.top = `${offset_y}px`;
    }

    //Set magnifier display
    magnifier.style.backgroundPosition = `
      -${
        Math.min((pan_x*zoom) - w*(1 + x_change), local_el.width*zoom - w*2)
      }px -${
        Math.min((pan_y*zoom) - (local_el.height*zoom)/2 - h*(1 + y_change), local_el.height*zoom - h*2)
      }px
    `;

    //Update magnifier zoom
    magnifier.style.backgroundSize = `
      ${local_el.width*zoom}px ${local_el.height*zoom}px
    `;
  }
}

//Initialise magnifiers for all .art-preview-image elements
{
  var all_art_preview_imgs = document.querySelectorAll(".art-preview-image-container");

  for (var i = 0; i < all_art_preview_imgs.length; i++) magnify(
    all_art_preview_imgs[i].querySelector("img").id,
    3
  );
}
