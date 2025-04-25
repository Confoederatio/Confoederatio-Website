//Initialise functions
{
  //Map expansion/minimisation functionality
  function expandMap () {
    //Declare local instanc evariables
    var map_elements_obj = ministrat.main.map_elements;

    for (var i = 0; i < map_elements_obj.german_border_els.length; i++)
      map_elements_obj.german_border_els[i].setAttribute("class", map_elements_obj.german_border_els[i].getAttribute("class") + " drawn");

    map_elements_obj.berlin_border_el.setAttribute("class", "drawn");
    map_elements_obj.main_map_el.setAttribute("class", map_elements_obj.main_map_el.getAttribute("class") + " expanded");
    map_elements_obj.ministrat_container_el.setAttribute("class", map_elements_obj.ministrat_container_el.getAttribute("class") + " expanded");
    map_elements_obj.inner_german_border_el.setAttribute("class", "drawn");

    //Draw internal province borders after two seconds
    setTimeout(function(){
      for (var i = 0; i < map_elements_obj.west_german_border_els.length; i++)
        map_elements_obj.west_german_border_els[i].setAttribute("class", map_elements_obj.west_german_border_els[i].getAttribute("class") + " drawn");
    }, 2000);
    setTimeout(function(){
      for (var i = 0; i < map_elements_obj.east_german_border_els.length; i++)
        map_elements_obj.east_german_border_els[i].setAttribute("class", map_elements_obj.east_german_border_els[i].getAttribute("class") + " drawn");
    }, 4000);

    ministrat.game_open = true;
  }

  function HTMLCoordsToSVGCoords (arg0_html_x, arg1_html_y) {
    //Convert from parameters
    var html_x = returnSafeNumber(arg0_html_x, 0);
    var html_y = returnSafeNumber(arg1_html_y, 0);

    //Declare local reference variables
    var map_elements_obj = ministrat.main.map_elements;
    var map_svg = map_elements_obj.ministrat_svg_map_el;

    //Get SVG viewbox parameters
    var view_box = map_svg.viewBox.baseVal;

    //Calculate viewport height in pixels (1vh = 1% of viewport height)
    var vh_in_pixels = window.innerHeight / 100;
        
    //Since SVG is 92vh × 92vh, calculate its dimensions in pixels
    var svg_width_px = 92 * vh_in_pixels;
    var svg_height_px = 92 * vh_in_pixels;

    //Get SVG's actual position in the viewport
    var map_bbox = map_svg.getBoundingClientRect();
    var svg_left = map_bbox.left;
    var svg_top = map_bbox.top;

    //Calculate scaling factors between viewBox and actual rendered size
    var scale_x = svg_width_px / view_box.width;
    var scale_y = svg_height_px / view_box.height;

    //Transform from HTML coordinates to SVG coordinates
    var svg_x = (html_x - svg_left) / scale_x + view_box.x;
    var svg_y = (html_y - svg_top) / scale_y + view_box.y;

    //Return statement
    return [svg_x, svg_y];
  }

  function loadMapElements () {
    //Declare local reference variables
    var map_elements_obj = ministrat.main.map_elements;
    var map_cities_svg = document.querySelector(ministrat.config.map_elements.map_cities_selector);

    map_elements_obj.all_map_elements = document.querySelectorAll(ministrat.config.map_elements.map_elements_selector);
    map_cities_svg.addEventListener("load", function () {
      map_elements_obj.cities_dom = map_cities_svg.contentDocument;

      setTimeout(function(){
        loadMinistratCities();
        loadMinistratUnits();
      }, 1000);
    });

    map_elements_obj.berlin_border_el = document.querySelector(ministrat.config.map_elements.berlin_border_el);
    map_elements_obj.east_german_border_els = document.querySelectorAll(ministrat.config.map_elements.east_german_border_els);
    map_elements_obj.german_border_els = document.querySelectorAll(ministrat.config.map_elements.german_border_els);
    map_elements_obj.inner_german_border_el = document.querySelector(ministrat.config.map_elements.inner_german_border_el);
    map_elements_obj.main_map_el = document.querySelector(ministrat.config.map_elements.main_map_el);
    map_elements_obj.map_overlay_el = document.querySelector(ministrat.config.map_elements.map_overlay_el);
    map_elements_obj.ministrat_container_el = document.querySelector(ministrat.config.map_elements.ministrat_container_el);
    map_elements_obj.ministrat_svg_map_el = document.querySelector(ministrat.config.map_elements.ministrat_svg_map_el);
    map_elements_obj.west_german_border_els = document.querySelectorAll(ministrat.config.map_elements.west_german_border_els);
  }

  function minimiseMap () {
    //Declare local reference variables
    var map_elements_obj = ministrat.main.map_elements;

    //Iterate over all german border elements
    for (var i = 0; i < map_elements_obj.german_border_els.length; i++)
      map_elements_obj.german_border_els[i].setAttribute("class", map_elements_obj.german_border_els[i].getAttribute("class").replace(" drawn", ""));

    map_elements_obj.berlin_border_el.setAttribute("class", "");
    map_elements_obj.main_map_el.setAttribute("class", map_elements_obj.main_map_el.getAttribute("class").replace(" expanded", ""));
    map_elements_obj.ministrat_container_el.setAttribute("class", map_elements_obj.ministrat_container_el.getAttribute("class").replace(" expanded", ""));

    ministrat.game_open = false;
  }

  function svgCoordsToHTMLCoords(arg0_svg_x, arg1_svg_y) {
    // Convert from parameters, ensuring they're numbers
    var svg_x = returnSafeNumber(arg0_svg_x, 0);
    var svg_y = returnSafeNumber(arg1_svg_y, 0);
    
    //Declare local reference variables
    var map_elements_obj = ministrat.main.map_elements;
    var map_svg = map_elements_obj.ministrat_svg_map_el;
    
    //Get SVG's viewBox parameters
    var view_box = map_svg.viewBox.baseVal;
    
    //Calculate viewport height in pixels (1vh = 1% of viewport height)
    var vh_in_pixels = window.innerHeight / 100;
    
    //Since SVG is 92vh × 92vh, calculate its dimensions in pixels
    var svg_width_px = 92 * vh_in_pixels;
    var svg_height_px = 92 * vh_in_pixels;
    
    //Get SVG's actual position in the viewport
    var map_bbox = map_svg.getBoundingClientRect();
    var svg_left = map_bbox.left;
    var svg_top = map_bbox.top;
    
    //Calculate scaling factors between viewBox and actual rendered size
    var scale_x = svg_width_px / view_box.width;
    var scale_y = svg_height_px / view_box.height;
    
    //Transform from SVG viewBox coordinates to HTML coordinates
    var screen_x = svg_left + (svg_x - view_box.x) * scale_x;
    var screen_y = svg_top + (svg_y - view_box.y) * scale_y;
    
    //Round to integers for pixel precision
    screen_x = Math.round(screen_x);
    screen_y = Math.round(screen_y);
    
    //Return statement
    return [screen_x, screen_y];
  }

  function updateMapCoords () {
    //Declare local reference variables
    var map_elements_obj = ministrat.main.map_elements;

    for (let i = 0; i < map_elements_obj.all_map_elements.length; i++)
      map_elements_obj.all_map_elements[i].style.transform = `translate(${ministrat.main.map.x}px, ${ministrat.main.map.y}px) scale(${ministrat.main.map.zoom})`;
  }
}