//Technical Elements
/*
  createPanel() - options: {
    name: (String) - Optional. The name to print on the square tile. "" by default.
    animation: (String) - The CSS class to apply to the square tile.
      font_position: (String) - Optional. "bottom-left"/"bottom-right"/"centre"/"top-left". "bottom-right" by default
      font_size: (Number) - The font size to apply (1-3). 1 by default. Valid font sizes are:
        1 - .parallax-minor-project-text. 2vh
        2 - .parallax-major-project-text. 4vh
        3 - .parallax-group-text. 6vh
      font_weight: (Number) - The font weight to apply to the title. 300 by default.

    size: (Number) - The size of the tile (1-6). Valid square sizes are:
      1 - .large-square. 32vh
      2 - .sublarge-square. 24vh
      3 - .medium-square. 24vh
      4 - .submedium-square. 18vh
      5 - .small-square. 16vh
      6 - .tiny-square. 12vh
    x: (Number) - The x position (vh) to place the tile. 0 by default.
    y: (Number) - The y position (vh) to place the tile. 0 by default.

    default_bookmark: (Boolean) - Whether the panel is bookmarked by default.
    default_pin: (Boolean) - Whether the panel is pinned by default.
    dependencies: (Array<String, ...>) - Optional. The IDs of the tiles that descend from this category tile. Nothing by default.

    background_image: (String) - Optional. The file path to display as the background image for the tile. Undefined by default.
    background_opacity: (Number) - Optional. 0.3 by default if background_image is defined.
    colour: (String) - The CSS colour to portray the tile in. Colour classes are:
      "blue"/"blurple"/"bright-yellow"/"copper"/"cream_white"/"dark-blurple"/"dark-grey"/"forest-green"/"light-blue"/"light-grey"/"light-purple"/"midnight-blue"/"orange"/"mauve"/"red"/"sepia"/"salmon"/"transparent-sepia"/"yellow". "copper" by default.
    content: (String) - The HTML text to add to the content panel associated with the tile.
  }
*/

//Technical Projects
{
  createPanel("discord_bots", {
    name: "Discord Bots",
    animation: "discord-bots",
      font_size: 3,
      font_weight: 700,
    size: 1,
    x: 0,
    y: 36,

    dependencies: ["anno_1800", "universal_bot_framework", "triumph_and_tragedy_one"],
    colour: "blurple"
  });

  createPanel("triumph_and_tragedy_one", {
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
  })
}
