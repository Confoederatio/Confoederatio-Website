window.ministrat = {
  debug_geolocator: false,
  drag_mode: undefined, //Either 'undefined', 'panning', or 'selection'
  game_open: false,
  ignore_scroll: false,
  is_dragging: false,
  is_selecting: false,

  config: {
    all_locations: [],
    defines: {},
    locations: {},
    map_elements: {},
    map_overlays: {},
    orbats: {},
    selectors: {},
    topbar_elements: {},
    ui: {},
    units: {},
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
    player_tag: undefined
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