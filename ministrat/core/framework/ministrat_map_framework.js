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

  function getSVGCoords (arg0_html_x, arg1_html_y) {
    //Convert from parameters
    var html_x = returnSafeNumber(arg0_html_x, 0);
    var html_y = returnSafeNumber(arg1_html_y, 0);

    //Declare local instance variables
    var map_svg = ministrat.main.map_elements.ministrat_svg_map_el;
    var reference_point = map_svg.createSVGPoint();
    reference_point.x = html_x;
    reference_point.y = html_y;

    var reference_point_in_map_coords = reference_point.matrixTransform(map_svg.getScreenCTM().inverse());
    var svg_coords = svgCoordsToHTMLCoords(reference_point_in_map_coords.x, reference_point_in_map_coords.y);
      svg_coords[0] -= window.innerHeight*0.0107; //Nobody knows why these magic numbers are needed
      svg_coords[1] -= window.innerHeight*0.025;
    
    //Return statement
    return svg_coords;
  }

  function htmlCoordsToSVGCoords (arg0_html_x, arg1_html_y) {
    //Convert from parameters
    var html_x = returnSafeNumber(arg0_html_x, 0);
    var html_y = returnSafeNumber(arg1_html_y, 0);

    //Return statement
    return getSVGCoords(html_x, html_y);
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

  function svgCoordsToHTMLCoords (arg0_svg_x, arg1_svg_y) {
    // Convert from parameters
    var svg_x = returnSafeNumber(arg0_svg_x, 0);
    var svg_y = returnSafeNumber(arg1_svg_y, 0);

    //Declare local reference variables
    var vh = window.innerHeight/100;

    var svg_width_px = 92*vh;
    var svg_height_px = 92*vh;

    var adjusted_svg_x = svg_x;
    var adjusted_svg_y = svg_y;
    var screen_x = (adjusted_svg_x/1000)*svg_width_px;
    var screen_y = (adjusted_svg_y/1000)*svg_height_px;
      screen_x += window.innerHeight*0.0107; //Nobody knows why these magic numbers are needed, except that there is some vh scaling
      screen_y += window.innerHeight*0.025;
    
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