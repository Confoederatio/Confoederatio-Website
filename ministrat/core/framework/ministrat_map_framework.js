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

  function loadMapElements () {
    //Declare local reference variables
    var map_elements_obj = ministrat.main.map_elements;

    map_elements_obj.all_map_elements = document.querySelectorAll(ministrat.config.map_elements.map_elements_selector);

    map_elements_obj.berlin_border_el = document.querySelector(ministrat.config.map_elements.berlin_border_el);
    map_elements_obj.east_german_border_els = document.querySelectorAll(ministrat.config.map_elements.east_german_border_els);
    map_elements_obj.german_border_els = document.querySelectorAll(ministrat.config.map_elements.german_border_els);
    map_elements_obj.inner_german_border_el = document.querySelector(ministrat.config.map_elements.inner_german_border_el);
    map_elements_obj.main_map_el = document.querySelector(ministrat.config.map_elements.main_map_el);
    map_elements_obj.ministrat_container_el = document.querySelector(ministrat.config.map_elements.ministrat_container_el);
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

  function updateMapCoords () {
    //Declare local reference variables
    var map_elements_obj = ministrat.main.map_elements;

    for (var i = 0; i < map_elements_obj.all_map_elements.length; i++)
      map_elements_obj.all_map_elements[i].style.transform = `translate(${ministrat.main.map.x}px, ${ministrat.main.map.y}px) scale(${ministrat.main.map.zoom})`;
  }
}