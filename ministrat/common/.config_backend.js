window.ministrat = {
  debug_geolocator: false,
  drag_mode: undefined, //Either 'undefined', 'panning', or 'selection'
  game_open: false,
  ignore_scroll: false,
  is_dragging: false,
  is_selecting: false,
  pathfind_downscaling: Math.floor(5*1.379352751),
  pan_threshold: 8,
  px_per_km: 1.379352751,

  config: {
    all_locations: [],
    canvas_offset: [11, 27], //From Ministrat cities SVG viewport offsets
    defines: {},
    locations: {},
    map_elements: {},
    map_overlays: {},
    non_ministrat_selector: `#homepage-banner, #gallery-section`,
    orbats: {},
    rotate_animation_time: 5000,
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