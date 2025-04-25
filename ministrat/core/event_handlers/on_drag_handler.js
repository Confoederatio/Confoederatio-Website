//Initialise functions
{
  function clearSelectionBox () {
    //Declare local instance variables
    var map_overlay_el = ministrat.main.map_elements.map_overlay_el;
    var selection_box_el = map_overlay_el.querySelector(".selection-box");

    if (selection_box_el)
      selection_box_el.remove();
  }

  function drawSelectionBox () {
    //Declare local instance variables
    var map_overlay_el = ministrat.main.map_elements.map_overlay_el;
    var selection_box_el = map_overlay_el.querySelector(".selection-box");

    if (!selection_box_el) {
      selection_box_el = document.createElement("div");
      selection_box_el.setAttribute("class", "selection-box");
      selection_box_el.style.position = "absolute";
      selection_box_el.style.border = "1px solid green";
      selection_box_el.style.background = "rgba(0, 255, 0, 0.2)";
      selection_box_el.style.pointerEvents = "none";

      map_overlay_el.appendChild(selection_box_el);
    }

    //Calculate normalised coordinates
    var height = Math.abs(ministrat.main.map.end_y - ministrat.main.map.start_y);
    var left = Math.min(ministrat.main.map.start_x, ministrat.main.map.end_x);
    var top = Math.min(ministrat.main.map.start_y, ministrat.main.map.end_y);
    var width = Math.abs(ministrat.main.map.end_x - ministrat.main.map.start_x);

    var selection_box_coords = [left, top];

    //Update position
    selection_box_el.style.left = `${selection_box_coords[0]}px`;
    selection_box_el.style.top = `${selection_box_coords[1]}px`;

    selection_box_el.style.width = `${width}px`;
    selection_box_el.style.height = `${height}px`;
  }

  function loadMinistratPanHandler (e) {
    //Declare local reference variables
    var map_el = ministrat.main.map_elements.main_map_el;

    //Computer support
    map_el.addEventListener("mousedown", function (e) {
      if (!ministrat.game_open) return;

      if (e.shiftKey) {
        ministrat.is_selecting = true;
        ministrat.main.map.start_x = e.clientX;
        ministrat.main.map.start_y = e.clientY;
        ministrat.main.map.end_x = e.clientX;
        ministrat.main.map.end_y = e.clientY;

        drawSelectionBox();
      } else {
        ministrat.is_dragging = true;
        ministrat.main.map.start_x = e.clientX;
        ministrat.main.map.start_y = e.clientY;
      }

      //Prevent default behaviour
      e.preventDefault();
    });

    map_el.addEventListener("mousemove", function (e) {
      if (!ministrat.game_open) return;
      if (!ministrat.is_dragging && !ministrat.is_selecting) return;

      if (ministrat.is_selecting) {
        ministrat.main.map.end_x = e.clientX;
        ministrat.main.map.end_y = e.clientY;

        drawSelectionBox();
      } else if (ministrat.is_dragging) {
        var delta_x = e.clientX - ministrat.main.map.start_x;
        var delta_y = e.clientY - ministrat.main.map.start_y;
  
        ministrat.main.map.x += delta_x;
        ministrat.main.map.y += delta_y;
        ministrat.main.map.start_x = e.clientX;
        ministrat.main.map.start_y = e.clientY;
  
        updateMapCoords();
      }
    });
    
    ["mouseup", "mouseleave"].forEach((e) => {
      map_el.addEventListener(e, () => {
        if (!ministrat.game_open) return;
        ministrat.is_dragging = false;

        if (ministrat.is_selecting) {
          ministrat.is_selecting = false;
          clearSelectionBox();
        }
      })
    });

    //Mobile support
    map_el.addEventListener("touchstart", function (e) {
      if (!ministrat.game_open) return;
      if (e.touches.length != 1) return;

      ministrat.is_dragging = true;
      ministrat.main.map.start_x = e.touches[0].clientX;
      ministrat.main.map.start_y = e.touches[0].clientY;
    });

    map_el.addEventListener("touchmove", function (e) {
      if (!ministrat.game_open) return;
      if (!ministrat.is_dragging || e.touches.length != 1) return;
      
      var touch = e.touches[0];

      var delta_x = touch.clientX - ministrat.main.map.start_x;
      var delta_y = touch.clientY - ministrat.main.map.start_y;

      ministrat.main.map.x += delta_x;
      ministrat.main.map.y += delta_y;
      ministrat.main.map.start_x = touch.clientX;
      ministrat.main.map.start_y = touch.clientY;

      updateMapCoords();
      e.preventDefault();
    }, { passive: false });

    map_el.addEventListener("touchend", function (e) {
      if (!ministrat.game_open) return;
      ministrat.is_dragging = false;
    });
  }
}