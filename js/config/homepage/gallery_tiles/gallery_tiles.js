config.homepage.gallery.tiles = {
  discord_bots: {
    name: "Discord Bots",
    animation: "discord-bots",
      font_size: 3,
      font_weight: 700,
    is_base_node: true,
    size: 1,
    x: 0,
    y: 36,

    dependencies: ["anno_1800", "universal_bot_framework", "triumph_and_tragedy_one"],
    colour: "blurple"
  },
  triumph_and_tragedy_one: {
    name: "Triumph & Tragedy I",
    animation: "triumph-and-tragedy-one",
      font_position: "centre",
      font_size: 2,
      font_weight: 500,
    size: 2,
    x: 32,
    y: 68,

    default_bookmark: true,
    default_pin: true,
    dependencies: ["triumph_and_tragedy_mod_creator", "triumph_and_tragedy_two"],

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
  }
};
