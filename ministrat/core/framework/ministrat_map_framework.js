window.ministrat_open = false;

//Initialise functions
{
  //Map expansion/minimisation functionality
  function expandMap () {
    for (var i = 0; i < german_borders.length; i++)
      german_borders[i].setAttribute("class", german_borders[i].getAttribute("class") + " drawn");

    berlin_border.setAttribute("class", "drawn");
    main_map.setAttribute("class", main_map.getAttribute("class") + " expanded");
    ministrat_container.setAttribute("class", ministrat_container.getAttribute("class") + " expanded");
    inner_german_border.setAttribute("class", "drawn");

    //Draw internal province borders after two seconds
    setTimeout(function(){
      for (var i = 0; i < west_german_borders.length; i++)
        west_german_borders[i].setAttribute("class", west_german_borders[i].getAttribute("class") + " drawn");
    }, 2000);
    setTimeout(function(){
      for (var i = 0; i < east_german_borders.length; i++)
        east_german_borders[i].setAttribute("class", east_german_borders[i].getAttribute("class") + " drawn");
    }, 4000);

    ministrat_open = true;
  }

  function minimiseMap () {
    for (var i = 0; i < german_borders.length; i++)
      german_borders[i].setAttribute("class", german_borders[i].getAttribute("class").replace(" drawn", ""));

    berlin_border.setAttribute("class", "");
    main_map.setAttribute("class", main_map.getAttribute("class").replace(" expanded", ""));
    ministrat_container.setAttribute("class", ministrat_container.getAttribute("class").replace(" expanded", ""));
  }

  main_map.onclick = function () {
    if (!main_map.getAttribute("class").includes("expanded"))
      expandMap();
  };
}