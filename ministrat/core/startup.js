//Initialise startup process
{
  window.ministrat = {
    debug_geolocator: false,
    drag_mode: undefined, //Either 'undefined', 'panning', or 'selection'
    game_open: false,
    ignore_scroll: false,
    is_dragging: false,
    is_selecting: false,
    pan_threshold: 8,

    config: {
      all_locations: [],
      locations: {},
      non_ministrat_selector: `#homepage-banner, #gallery-section`,
      map_elements: {
        map_cities_selector: `#main-map .ministrat-cities-overlay`,
        map_elements_selector: `#main-map > *`,

        berlin_border_el: `#west-berlin-border`,
        east_german_border_els: `.east-german-province`,
        german_border_els: `.german-border`,
        inner_german_border_el: `#inner-german-border`,
        map_overlay_el: `#ministrat-map-overlay`,
        main_map_el: `#main-map`,
        ministrat_svg_map_el: `#ministrat-svg-map`,
        ministrat_container_el: `#main-map-blackout-container`,
        west_german_border_els: `.west-german-province`,
      },
      rotate_animation_time: 5000,
      topbar_elements: {
        clock_canvas_selector: `#ministrat-clock`,
        date_canvas_selector: `.ministrat-container #date-container`,
        topbar_container_selector: `#ministrat-topbar-container`,

        //Time controls
        pause_button_selector: `#pause-button`,
        speed_one_button_selector: `#speed-one-button`,
        speed_two_button_selector: `#speed-two-button`,
        speed_three_button_selector: `#speed-three-button`,
        time_controls_selector: `#time-controls-container`
      },
      ui: {
        ministrat_primary_ui_colour: `rgba(40, 255, 226, 0.8)`
      },
      unique_locations: {}
    },
    gamestate: {
      date: {
        day: 9,
        month: 11,
        year: 1983,
        hour: 0 //24-hour time
      },

      cities: {},
      countries: {},
      units: {},
      player_tag: "brd"
    },
    main: {
      game_speed: 0, //Game speeds are 0, 1, 3, 5
      map: {
        start_x: 0,
        start_y: 0,
        
        x: 0,
        y: 0,
        zoom: 1,
      },
      map_elements: {},
      selected_units: [],
      unique_locations: {}
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
  ministrat.main.map_elements.ministrat_svg_map_el.onclick = function (e) {
    ministratMainMapClickHandler(e);
  };
}