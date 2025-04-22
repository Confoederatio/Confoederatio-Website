//Initialise startup process
{
  window.ministrat = {
    game_open: false,

    config: {
      map_elements: {
        berlin_border_el: `#west-berlin-border`,
        east_german_border_els: `.east-german-province`,
        german_border_els: `.german-border`,
        inner_german_border_el: `#inner-german-border`,
        main_map_el: `#main-map`,
        ministrat_container_el: `#main-map-blackout-container`,
        west_german_border_els: `.west-german-province`,
      }
    },
    gamestate: {},
    main: {
      map_elements: {}
    }
  };

  //Load Ministrat
  loadMapElements();
  loadMinistratScrollHandler();

  ministrat.main.map_elements.main_map_el.onclick = function (e) {
    ministratMapClickHandler(e);
  };
}