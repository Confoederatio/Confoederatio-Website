//Initialise startup process
{
  window.ministrat = {
    game_open: false,
    ignore_scroll: false,
    is_dragging: false,

    config: {
      map_elements: {
        map_elements_selector: `#main-map > *`,

        berlin_border_el: `#west-berlin-border`,
        east_german_border_els: `.east-german-province`,
        german_border_els: `.german-border`,
        inner_german_border_el: `#inner-german-border`,
        main_map_el: `#main-map`,
        ministrat_container_el: `#main-map-blackout-container`,
        west_german_border_els: `.west-german-province`,
      },
      topbar_elements: {
        clock_canvas_selector: `#ministrat-clock`,
      },
      ui: {
        ministrat_primary_ui_colour: `rgba(40, 255, 226, 0.8)`
      }
    },
    gamestate: {},
    main: {
      map: {
        start_x: 0,
        start_y: 0,
        
        x: 0,
        y: 0,
        zoom: 1,
      },
      map_elements: {}
    }
  };

  //Load Ministrat
  loadMapElements();
  loadMinistratPanHandler();
  loadMinistratScrollHandler();
  loadMinistratTopbar();

  ministrat.main.map_elements.main_map_el.onclick = function (e) {
    ministratMapClickHandler(e);
  };
}