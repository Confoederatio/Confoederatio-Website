config.homepage.gallery.tiles = {
  ampersand_mod_creator: {
    name: "Ampersand Mod Creator",
    animation: "ampersand-mod-creator",
      font_position: "bottom-left",
      font_size: 1,
      font_weight: 300,
    size: 5,
    x: 44,
    y: 92,
    colour: "dark-blurple"
  },
  empires_undone: {
    name: "Empires Undone",
    animation: "empires-undone",
      font_position: "centre-right",
      font_size: 2,
      font_weight: 100,
    default_pin: true,
    size: 3,
    x: 32,
    y: 40,

    background_image: `gfx/interface/empires_undone.png`,
    background_opacity: 0.45,
    colour: "light-purple"
  },
  triumph_and_tragedy_one: {
    name: "Triumph & Tragedy I",
    animation: "triumph-and-tragedy-one",
      font_position: "centre",
      font_size: 2,
      font_weight: 500,
    size: 2,
    x: 32,
    y: 64,

    default_bookmark: true,
    default_pin: true,
    dependencies: ["ampersand_mod_creator", "triumph_and_tragedy_two"],

    background_image: `gfx/interface/triumph_and_tragedy_icon_no_text.png`,
    background_opacity: 0.4,
    colour: "mauve",
    content: `<div id = "triumph_and_tragedy_one-panel-title" class = "parallax-item-content-panel-title">Triumph & Tragedy I</div>
    <hr id = "triumph_and_tragedy_one-content-panel-divider" class = "parallax-item-content-panel-divider">
    <b>Development:</b> <span id = "triumph_and_tragedy_one-development-indicator" class = "parallax-item-complete">Complete</span>,<br>
    <span id = "triumph_and_tragedy_one-development-date" class = "parallax-item-development-date">22 April 2020 - 1 September 2021</span><br>
    <b>Status:</b> <span id = "triumph_and_tragedy_one-status" class = "parallax-item-content-panel-status-indicator secondary">Secondary Project</span>
    <div id = "triumph_and_tragedy_one-body-text" class = "parallax-item-content-panel-body-text">
      Politics, diplomacy, combat, and economics come to life in one of the most complex bots ever created. Move armies around on massive world maps to wage war and build a nation, found cities only to see them rise and fall; in Triumph & Tragedy I, the world is your oyster.
      <hr id = "triumph_and_tragedy_one-content-panel-divider" class = "parallax-item-content-panel-divider">
      <b>AI.</b>
      Reach new levels of interaction and immersion as you fight to keep your nation afloat between dozens of other countries, both AI and human. Each AI has unique characteristics, so plan out your strategy wisely ..
      <br><br>
      <b>'Civilisation in a Bot'.</b>
      A full desktop experience disguised as a Discord bot, Triumph & Tragedy I offers you the chance to found your very own nation and take it through the ages: build cities up from nothing and watch them grow - experience the tumult of the Industrial Revolution - stand by the sidelines or duke it out in massive world wars. How you lead your nation is up to you.
      <br><br>
      <b>From Research and Economies to Combat.</b>
      Through the Renaissance to the Digital Age, Triumph & Tragedy I is an all-encompassing game with everything from submarine warfare to the housing and infrastructure of your cities. Explore hundreds of technologies, units, and buildings, and unlock new mechanics to play with in an ever-changing world - all underneath a single Discord bot.
      <br><br>
      <b>Huge World Maps.</b>
      Armies, cities, goods, and colonists are no longer tied to numerical abstractions, but actual objects on a map that spans the globe and over 14,000 provinces. From the Siberian Wastes to the depths of the Amazon to fictional planets, each new map is guaranteed to bring with it new memories and scenarios.
      <br><br>
      <b>Modding Compatibility.</b>
      With an in-depth backend JSON-based modding API allowing for the customisation of buildings, units, governments, laws, events, and technologies, building what may seem like an entirely new game is never more than a few lines of text away.
    </div>`
  },
  into_modernity: {
    name: "Into Modernity",
    animation: "into-modernity",
      font_position: "centre",
      font_size: 1,
      font_weight: 300,
    size: 5,
    x: 76,
    y: 100,
    colour: "orange"
  },
  last_man_standing: {
    name: "Last Man Standing",
    animation: "last-man-standing",
      font_position: "bottom-right",
      font_size: 1,
      font_weight: 300,
    size: 5,
    x: 92,
    y: 68,
    colour: "dark-grey"
  },
  proxy_cables: {
    name: "Proxy Cables",
    animation: "proxy-cables",
      font_position: "top-left",
      font_size: 1,
      font_weight: 300,
    size: 5,
    x: 92,
    y: 84,
    colour: "blue"
  },
  system_dynamics: {
    name: "System Dynamics",
    animation: "system-dynamics",
      font_position: "bottom-right",
      font_size: 1,
      font_weight: 300,
    size: 5,
    x: 60,
    y: 100,
    colour: "yellow",
  },
  eleven_fiftynine_aoc_two: {
    name: "11:59 (AOC2)",
    animation: "eleven-fifty-nine-aoc-two",
      font_position: "centre",
      font_size: 1,
      font_weight: 300,
    size: 4,
    x: 92,
    y: 18,

    background_image: `gfx/interface/project_trinity.png`,
    background_opacity: 0.35,
    colour: "red"
  },
  analytical_engine: {
    name: "Analytical Engine",
    animation: "analytical-engine",
      font_position: "bottom-left",
      font_size: 2,
      font_weight: 500,
    default_pin: true,
    size: 2,
    x: 92,
    y: 36,

    dependencies: ["eleven_fiftynine_aoc_three"],
    background_image: `gfx/interface/analytical_engine_tile.png`,
    background_opacity: 0.15,
    colour: "transparent-sepia"
  },
  eleven_fiftynine_aoc_three: {
    name: "",
    animation: "eleven-fifty-nine-aoc-three",
      font_position: "centre",
      font_size: 1,
      font_weight: 300,
    size: 4,
    x: 120,
    y: 32,

    background_image: `gfx/interface/1159_logo.jpg`,
    background_opacity: 0.4,
    colour: "midnight-blue"
  },
  universal_framework: {
    name: "<div style = 'font-weight: 700;'>UF</div><br><br><div style = 'text-align: right;'>Universal Framework</div>",
    animation: "universal-framework",
      font_position: "top-left",
      font_size: 2,
      font_weight: 400,
    default_pin: true,
    size: 2,
    x: 144,
    y: 68,

    colour: "orange",
    background_opacity: 1
  },
  scriptly: {
    name: "Scriptly",
    animation: "scriptly",
      font_position: "bottom-left",
      font_size: 1,
      font_weight: 300,
    size: 4,
    x: 144,
    y: 96,

    colour: "bright-yellow"
  },

  discord_bots: {
    name: "Grand Strategy",
    animation: "grand-strategy",
      font_size: 3,
      font_weight: 700,
    is_base_node: true,
    size: 1,
    x: 0,
    y: 32,

    dependencies: ["empires_undone", "triumph_and_tragedy_one"],
    colour: "copper"
  },
  triumph_and_tragedy_two: {
    name: "Triumph & Tragedy II",
    animation: "triumph-and-tragedy-two",
      font_position: "bottom-right",
      font_size: 2,
      font_weight: 700,
    default_bookmark: true,
    default_pin: true,
    size: 1,
    x: 60,
    y: 68,

    dependencies: ["system_dynamics", "into_modernity", "last_man_standing", "proxy_cables"],
    background_image: `gfx/interface/battle_of_the_leyte_gulf.png`,
    background_opacity: 0.4,
    colour: "salmon"
  },
  grand_strategy_mods: {
    name: "Mods & Tools",
    animation: "grand-strategy-mods",
      font_size: 3,
      font_weight: 700,
    is_base_node: true,
    size: 1,
    x: 60,
    y: 32,

    dependencies: ["eleven_fiftynine_aoc_two", "analytical_engine"],
    colour: "blurple"
  },
  other: {
    name: "Other",
    animation: "other",
      font_size: 3,
      font_weight: 700,
    is_base_node: true,
    size: 1,
    x: 112,
    y: 68,

    dependencies: ["scriptly", "universal_framework"],
    colour: "forest-green"
  }
};
