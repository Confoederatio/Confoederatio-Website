config.homepage.gallery.tiles = {
  //Technical (CTD)
  ampersand_mod_creator: {
    name: "Ampersand Mod Creator",
    animation: "ampersand-mod-creator",
      font_position: "bottom-left",
      font_size: 1,
      font_weight: 300,
    size: 5,
    x: 44,
    y: 92,
    colour: "dark-blurple",
    content: `<div id = "ampersand_mod_creator-panel-title" class = "parallax-item-content-panel-title">Ampersand Mod Creator</div>
    <hr class = "parallax-item-content-panel-divider">
    <b>Development:</b> <span id = "ampersand_mod_creator-development-indicator" class = "parallax-item-complete">Complete</span>,<br>
    <span id = "ampersand_mod_creator-development-date" class = "parallax-item-development-date">18 March 2024 - 11 March 2025</span><br>
    <b>Status:</b> <span id = "ampersand_mod_creator-status" class = "parallax-item-content-panel-status-indicator legacy">Legacy Project</span>
    <div id = "ampersand_mod_creator-body-text" class = "parallax-item-content-panel-body-text">Gamechanger editor for map modding T&T2 after importing SVG maps from Inkscape. Used to define adjacencies, regions, terrain, and other custom data fields for T&T2. Note that this project is subject to expansion as Triumph & Tragedy II gradually improves. For a full look at its internal workings, available documentation and source code are available online.
    <hr class = "parallax-item-content-panel-divider">
      <b>Documentation:</b> <a href = "https://confoederatiodocs.info/CTD/Ampersand_Mod_Creator">Confoederatio Docs</a>
      <b>Releases:</b>
      <ul>
        <li>1.0r Legacy | <a href = "https://github.com/Confoederatio/Ampersand-Mod-Creator/archive/refs/tags/1.0r-legacy.zip">Download</a> | <a href = "https://github.com/Confoederatio/Ampersand-Mod-Creator/releases/tag/1.0r-legacy">GitHub</a></li>
      </ul>
    </div>
    `
  },
  empires_undone: {
    name: "Empires Undone",
    animation: "empires-undone",
      font_position: "bottom-left",
      font_size: 2,
      font_weight: 100,
    default_pin: true,
    size: 3,
    x: 32,
    y: 40,

    background_image: `gfx/interface/tiles/empires_undone.png`,
    background_opacity: 0.2,
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

    background_image: `gfx/interface/tiles/triumph_and_tragedy_icon_no_text.png`,
    background_opacity: 0.4,
    colour: "mauve",
    content: `<div id = "triumph_and_tragedy_one-panel-title" class = "parallax-item-content-panel-title">Triumph & Tragedy I</div>
    <hr class = "parallax-item-content-panel-divider">
    <b>Development:</b> <span id = "triumph_and_tragedy_one-development-indicator" class = "parallax-item-complete">Complete</span>,<br>
    <span id = "triumph_and_tragedy_one-development-date" class = "parallax-item-development-date">22 April 2020 - 1 September 2021</span><br>
    <b>Status:</b> <span id = "triumph_and_tragedy_one-status" class = "parallax-item-content-panel-status-indicator secondary">Secondary Project</span>
    <div id = "triumph_and_tragedy_one-body-text" class = "parallax-item-content-panel-body-text">
      Politics, diplomacy, combat, and economics come to life in one of the most complex bots ever created. Move armies around on massive world maps to wage war and build a nation, found cities only to see them rise and fall; in Triumph & Tragedy I, the world is your oyster.
      <hr class = "parallax-item-content-panel-divider">
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
    name: "Proxy<br>Cables",
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

    background_image: `gfx/interface/tiles/project_trinity.png`,
    background_opacity: 0.35,
    colour: "red",
    content: `<div id = "eleven_fiftynine_aoc_two-panel-title" class = "parallax-item-content-panel-title">11:59 (AOC2)</div>
    <hr class = "parallax-item-content-panel-divider">
    <b>Development:</b> <span id = "eleven_fiftynine_aoc_two-development-indicator" class = "parallax-item-complete">Complete</span>,<br>
    <span id = "eleven_fiftynine_aoc_two-development-date" class = "parallax-item-development-date">22 November 2018 - 17 March 2020</span><br>
    <b>Status:</b> <span id = "eleven_fiftynine_aoc_two-status" class = "parallax-item-content-panel-status-indicator tertiary">Tertiary Project</span>
    <div id = "eleven_fiftynine_aoc_two-body-text" class = "parallax-item-content-panel-body-text">
      Formerly developed for the mobile grand-strategy game Age of Civilisations II, 11:59 seeks to bring the pivotal events of the Cold War to the game using a Paradox modding paradigm. Due to game limitations, and the eventual abandonment of AOC2 itself, development was suspended in 2020.
      <br><br>
      All 11:59 mod work has since been moved to AOC3/AnalyticalEngine to better support 11:59 in the future.
      <hr class = "parallax-item-content-panel-divider">
      <b>Links:</b> <a href = "http://www.ageofcivilizationsgame.com/topic/5090-1159-a-cold-war-mod/">Forums</a> | <a href = "https://www.moddb.com/mods/1159-a-cold-war-mod">ModDB</a>
      <b>Releases:</b>
      <ul>
        <li>0.92.1b | <a href = "https://www.moddb.com/downloads/start/193646?referer=https%3A%2F%2Fwww.moddb.com%2Fmods%2F1159-a-cold-war-mod">Download</a></li>
      </ul>
    </div>`
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
    background_image: `gfx/interface/tiles/analytical_engine_tile.png`,
    background_opacity: 0.15,
    colour: "transparent-sepia",
    content: `<div id = "analytical_engine-panel-title" class = "parallax-item-content-panel-title">AnalyticalEngine</div>
    <hr class = "parallax-item-content-panel-divider">
    <b>Development:</b> <span id = "analytical_engine-development-indicator" class = "parallax-item-beta-ongoing">Beta (Ongoing)</span>,<br>
    <span id = "analytical_engine-development-date" class = "parallax-item-development-date">27 October 2024 -</span><br>
    <b>Status:</b> <span id = "analytical_engine-status" class = "parallax-item-content-panel-status-indicator primary">Primary Project</span>
    <div id = "analytical_engine-body-text" class = "parallax-item-content-panel-body-text">
      AnalyticalEngine (also known as <b>Project Orion</b>) is a development effort to open-source the entire core binary code of AOC3 and improve moddability by allowing for a custom NashornJS scripts in mods by providing an API for Event Conditions, Effects, Game Scopes, Modded Multiplayer (MP) support, as well as Custom Mapmodes and Custom UIs.
      <hr class = "parallax-item-content-panel-divider">
      <b>Documentation:</b> <a href = "https://confoederatiodocs.info/CTD/AnalyticalEngine">Confoederatio Docs</a>
      <b>Links:</b> <a href = "http://www.ageofcivilizationsgame.com/topic/252006-analyticalengine-custom-uis-mapmodes-event-scripting-modded-multiplayer-and-tooltips/">Forums</a> | <a href = "https://github.com/Confoederatio/AnalyticalEngine">GitHub</a> | <a href = "https://steamcommunity.com/sharedfiles/filedetails/?id=3429582135&searchtext=analyticalengine">Steam</a>
      <b>Releases:</b>
      <ul>
        <li>0.6b Centurion | <a href = "https://github.com/Confoederatio/AnalyticalEngine/archive/refs/tags/beta-0.6.0-centurion.zip">Download</a> | <a href = "https://github.com/Confoederatio/AnalyticalEngine/releases/tag/beta-0.6.0-centurion">GitHub</a></li>
        <li>0.5b Rhine | <a href = "https://github.com/Confoederatio/AnalyticalEngine/archive/refs/tags/beta-0.5.0-rhine.zip">Download</a> | <a href = "https://github.com/Confoederatio/AnalyticalEngine/releases/tag/beta-0.5.0-rhine">GitHub</a></li>
        <li>0.4b Perimeter | <a href = "https://github.com/Confoederatio/AnalyticalEngine/archive/refs/tags/beta-0.4.0-perimeter.zip">Download</a> | <a href = "https://github.com/Confoederatio/AnalyticalEngine/releases/tag/beta-0.4.0-perimeter">GitHub</a></li>
        <li>0.3.2b Chrome Dome | <a href = "https://github.com/Confoederatio/AnalyticalEngine/archive/refs/tags/beta-0.3.2-chrome-dome.zip">Download</a> | <a href = "https://github.com/Confoederatio/AnalyticalEngine/releases/tag/beta-0.3.2-chrome-dome">GitHub</a></li>
        <li>0.3.1b Broken Arrow | <a href = "https://github.com/Confoederatio/AnalyticalEngine/archive/refs/tags/beta-0.3.1-broken-arrow.zip">Download</a> | <a href = "https://github.com/Confoederatio/AnalyticalEngine/releases/tag/beta-0.3.1-broken-arrow">GitHub</a></li>
        <li>0.3b Empty Quiver | <a href = https://github.com/Confoederatio/AnalyticalEngine/archive/refs/tags/beta-0.3.0-empty-quiver.zip"">Download</a> | <a href = "https://github.com/Confoederatio/AnalyticalEngine/releases/tag/beta-0.3.0-empty-quiver">GitHub</a></li>
        <li>0.2b Cogwheel | <a href = "https://github.com/Confoederatio/AnalyticalEngine/archive/refs/tags/beta-0.2.0-cogwheel.zip">Download</a> | <a href = "https://github.com/Confoederatio/AnalyticalEngine/releases/tag/beta-0.2.0-cogwheel">GitHub</a></li>
      </ul>
    </div>`
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

    background_image: `gfx/interface/tiles/1159_logo.jpg`,
    background_opacity: 0.4,
    colour: "midnight-blue",
    content: `<div id = "eleven_fiftynine_aoc_three-panel-title" class = "parallax-item-content-panel-title">11:59 (AOC3)</div>
    <hr class = "parallax-item-content-panel-divider">
    <b>Development:</b> <span id = "eleven_fiftynine_aoc_three-development-indicator" class = "parallax-item-alpha-ongoing">Alpha (Ongoing) </span>,<br>
    <span id = "eleven_fiftynine_aoc_three-development-date" class = "parallax-item-development-date">27 October 2024 -</span><br>
    <b>Status:</b> <span id = "eleven_fiftynine_aoc_three-status" class = "parallax-item-content-panel-status-indicator secondary">Secondary Project</span>
    <div id = "eleven_fiftynine_aoc_three-body-text" class = "parallax-item-content-panel-body-text">
      Built on top of a new open-source injection engine (AnalyticalEngine) for Age of Civilisations III, 11:59 brings the economic and political intrigue of the First and Second Cold Wars to AOC3 between 1946-2092. Development of the mod has been handed over to Confoederatio Technical Division, and it is also used as an example for other game mods developed using AnalyticalEngine.
      <hr class = "parallax-item-content-panel-divider">
      <b>Links:</b> <a href = "https://github.com/Confoederatio/AnalyticalEngine/tree/main/src/mods/11.59">GitHub</a>
    </div>
    `
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
    background_opacity: 1,
    content: `<div id = "universal_framework-panel-title" class = "parallax-item-content-panel-title">Universal Framework</div>
    <hr class = "parallax-item-content-panel-divider">
    <b>Development:</b> <span id = "universal_framework-development-indicator" class = "parallax-item-complete">Complete, Ongoing</span>,<br>
    <span id = "universal_framework-development-date" class = "parallax-item-development-date">15 March 2024 -</span><br>
    <b>Status:</b> <span id = "universal_framework-status" class = "parallax-item-content-panel-status-indicator secondary">Secondary  Project</span>
    <div id = "universal_framework-body-text" class = "parallax-item-content-panel-body-text">
      The bedrock of future Confoederatio development, Universal Framework is designed as a modular JS library and software engine for developer quality-of-life and ease of use, with a particular focus towards UI, maths, and statistics. These modules are split up as follows:
      <ul>
        <li>ABRS (Automated Backup and Recovery System)</li>
        <li>Actions (Undo/Redo Trees and Delta Actions Logging System [DALS])</li>
        <li>AI (Puppeteer scraping hooks for web AI clients and social media, as well as message queueing)</li>
        <li>Animation</li>
        <li>Arrays (Dataframes, Matrices)</li>
        <li>BrowserUI (Context Menus, Frontend Web Design, and WYSIWYG Inputs)</li>
        <li>Colours</li>
        <li>CURL</li>
        <li>Date</li>
        <li>Log</li>
        <li>Numbers</li>
        <li>Objects (Structured Dataframes)</li>
        <li>Pathfinding</li>
        <li>Strings (NLP, Markdown Formatting)</li>
      </ul>
      <hr class = "parallax-item-content-panel-divider">
      <b>Links:</b> <a href = "https://github.com/Confoederatio/UniversalFramework/tree/main/Browser%20UF">GitHub (Browser)</a> | <a href = "https://github.com/Confoederatio/UniversalFramework/tree/main/Electron%20UF">GitHub (Electron)</a> | <a href = "https://github.com/Confoederatio/UniversalFramework/tree/main/Nashorn%20UF">GitHub (Nashorn)</a> | <a href = "https://github.com/Confoederatio/UniversalFramework/tree/main/Node%20UF">GitHub (Node)</a><br>
      <b>Releases:</b>
      <ul>
        <li>1.0 UF | <a href = "https://github.com/Confoederatio/UniversalFramework">GitHub</a>
          <ul>
            <li>1.0 UF (Browser) | <a href = "https://github.com/Confoederatio/UniversalFramework/archive/refs/tags/1.0-isopropylene.zip">Download</a> | <a href = https://github.com/Confoederatio/UniversalFramework/tree/main/Browser%20UF">GitHub</a></li>
            <li>1.0 UF (Electron) | <a href = "https://github.com/Confoederatio/UniversalFramework/archive/refs/tags/1.0-isopropylene.zip">Download</a> | <a href = https://github.com/Confoederatio/UniversalFramework/tree/main/Electron%20UF">GitHub</a></li>
            <li>1.0 UF (NashornJS) | <a href = "https://github.com/Confoederatio/UniversalFramework/archive/refs/tags/1.0-isopropylene.zip">Download</a> | <a href = "https://github.com/Confoederatio/UniversalFramework/tree/main/Nashorn%20UF">GitHub</a></li>
            <li>1.0 UF (Node) | <a href = "https://github.com/Confoederatio/UniversalFramework/archive/refs/tags/1.0-isopropylene.zip">Download</a> | <a href = "https://github.com/Confoederatio/UniversalFramework/tree/main/Node%20UF">GitHub</a></li>
          </ul>
        </li>
      </ul>
    </div>
    `
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

    colour: "bright-yellow",
    content: `<div id = "scriptly-panel-title" class = "parallax-item-content-panel-title">Scriptly</div>
    <hr class = "parallax-item-content-panel-divider">
    <b>Development:</b> <span id = "scriptly-development-indicator" class = "parallax-item-complete">Complete (Ongoing)</span>,<br>
    <span id = "scriptly-development-date" class = "parallax-item-development-date">5 November 2024</span><br>
    <b>Status:</b> <span id = "scriptly-status" class = "parallax-item-content-panel-status-indicator secondary">Secondary Project</span>
    <div id = "scriptly-body-text" class = "parallax-item-content-panel-body-text">
      Scriptly provides both CLI/GUI-application templates that utilise Universal Framework to be built on top of, functioning as a bootstrap software engine for rapid iteration. Used for everything from raster/research-level modelling to quick I/O tasks, Scriptly’s main use-case is to serve as a stopgap for more complex programmes that may still be in the development pipeline.
      <hr class = "parallax-item-content-panel-divider">
      <b>Releases:</b>
      <ul>
        <li>1.0 Scriptly | <a href = "https://github.com/Confoederatio/Scriptly">GitHub</a>
          <ul>
            <li>
              1.0 Scriptly (CLI)/0.5 Scriptly (GUI)
              <ul>
                <li>1.0 Scriptly (CLI) | <a href = "https://github.com/Confoederatio/Scriptly/archive/refs/tags/1.0-cli-0.5-gui-red.zip">Download</a> | <a href = "https://github.com/Confoederatio/Scriptly/releases/tag/1.0-cli-0.5-gui-red">GitHub</a></li>
                <li>0.5 Scriptly (GUI) | <a href = "https://github.com/Confoederatio/Scriptly/archive/refs/tags/1.0-cli-0.5-gui-red.zip">Download</a> | <a href = "https://github.com/Confoederatio/Scriptly/releases/tag/0.5-cli-0.5-gui-red">GitHub</a></li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    `
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
    background_image: `gfx/interface/tiles/battle_of_the_leyte_gulf.png`,
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
  },

  //Research (CRD)
  eoscala: {
    name: "Eoscala",
    animation: "eoscala",
      font_position: "bottom-right",
      font_size: 2,
      font_weight: 500,
    default_pin: true,
    size: 2,
    x: 220,
    y: 36,

    background_image: `gfx/interface/tiles/eoscala.png`,
    background_opacity: 1,
    colour: "dark-grey"
  },
  velkscala: {
    name: "Velkscala",
    animation: "velkscala",
      font_position: "centre",
      font_size: 2,
      font_weight: 300,
    size: 2,
    x: 192,
    y: 64,

    colour: "salmon"
  },

  gazetteer: {
    name: "<span style = 'font-size: 1vh;'>Gazetteer of Demographic, Economic, and Geographic Datasets</span>",
    animation: "gazetteer",
      font_position: "bottom-left",
      font_size: 1,
      font_weight: 500,
    size: 5,
    x: 220,
    y: 96,

    colour: "midnight-blue"
  },
  geographic_economic_papers: {
    name: "Geographic/Economic Papers",
    animation: "geographic-economic-papers",
      font_position: "bottom-right",
      font_size: 1,
      font_weight: 300,
    size: 5,
    x: 236,
    y: 96,

    colour: "salmon"
  },
  military_papers: {
    name: "Military Papers",
    animation: "military-papers",
      font_position: "bottom-right",
      font_size: 1,
      font_weight: 300,
    size: 5,
    x: 252,
    y: 80,

    colour: "red"
  },
  political_diplomatic_papers: {
    name: "Political/Diplomatic Papers",
    animation: "political-diplomatic-papers",
      font_position: "centre",
      font_size: 1,
      font_weight: 300,
    size: 5,
    x: 252,
    y: 64,

    colour: "forest-green"
  },
  
  naissance: {
    name: "Naissance",
    animation: "naissance",
      font_position: "centre",
      font_size: 2,
      font_weight: 500,
    default_bookmark: true,
    default_pin: true,
    size: 2,
    x: 272,
    y: 64,

    background_image: `gfx/interface/tiles/naissance.png`,
    background_opacity: 0.175,
    colour: "bright-yellow"
  },
  project_humanity: {
    name: "Project Humanity",
    animation: "project-humanity",
      font_position: "bottom-left",
      font_size: 1,
      font_weight: 300,
    size: 4,
    x: 300,
    y: 46,

    colour: "light-grey"
  },
  
  datasets: {
    name: "Datasets",
    animation: "datasets",
      font_size: 3,
      font_weight: 700,
    is_base_node: true,
    size: 1,
    x: 188,
    y: 32,

    dependencies: ["eoscala", "velkscala"],
    colour: "light-grey"
  },
  grey_literature_and_taxonomials: {
    name: "Grey Literature & Taxonomials",
    animation: "grey-literature-and-taxonomials",
      font_size: 2,
      font_weight: 700,
    is_base_node: true,
    size: 1,
    x: 220,
    y: 64,

    dependencies: ["gazetteer", "geographic_economic_papers", "military_papers", "political_diplomatic_papers"],
    colour: "cream-white"
  },
  software_and_tooling: {
    name: "Software & Tooling",
    animation: "software-and-tooling",
      font_size: 2,
      font_weight: 700,
    is_base_node: true,
    size: 1,
    x: 268,
    y: 32,

    dependencies: ["naissance", "project_humanity"],
    colour: "copper"
  },

  //Artistic (CAD)
  anno: {
    name: "Anno",
    animation: "anno",
      font_position: "centre",
      font_size: 2,
      font_weight: 500,
    size: 3,
    x: 368,
    y: 28,

    colour: "sepia"
  },
  armoured_advance: {
    name: "<span style = 'font-size: 1.2vh;'>Armoured Advance</span>",
    animation: "armoured-advance",
      font_position: "bottom-left",
      font_size: 1,
      font_weight: 300,
    size: 6,
    x: 372,
    y: 112,

    background_image: `gfx/interface/tiles/armoured_advance_square.png`,
    background_opacity: 0.1,
    colour: "blue"
  },
  art_triumph_and_tragedy: {
    name: "<span style = 'font-size: 1.8vh;'>Triumph & Tragedy</span>",
    animation: "art-triumph-and-tragedy",
      font_position: "centre",
      font_size: 1,
      font_weight: 300,
    size: 6,
    x: 440,
    y: 36,

    background_opacity: 0.4,
    colour: "blurple"
  },
  branding_logos: {
    name: "Branding Logos",
    animation: "branding-logos",
      font_position: "bottom-left",
      font_size: 2,
      font_weight: 200,
    size: 3,
    x: 344,
    y: 64,

    colour: "light-blue",
    dependencies: ["confoederatio", "confoederatio_website"]
  },
  boats_on_a_pond: {
    name: "<span style = 'font-size: 1.2vh;'>Boats on a Pond</span>",
    animation: "boats-on-a-pond",
      font_position: "top-left",
      font_size: 1,
      font_weight: 500,
    size: 6,
    x: 384,
    y: 112,

    background_image: `gfx/interface/tiles/boats_on_a_pond_square.png`,
    background_opacity: 0.4,
    colour: "blue"
  },
  brooklyn_bridge: {
    name: "<span style = 'font-size: 1.2vh;'>Brooklyn Bridge</span>",
    animation: "brooklyn-bridge",
      font_position: "centre",
      font_size: 1,
      font_weight: 300,
    size: 6,
    x: 396,
    y: 112,

    background_image: `gfx/interface/tiles/brooklyn_bridge_square.png`,
    background_opacity: 0.5,
    colour: "sepia-transparent"
  },
  confoederatio: {
    name: "<span style = 'font-size: 1.8vh; margin-left: 0.5vh;'>Confoederatio</span>",
    animation: "confoederatio",
      font_position: "bottom-right",
      font_size: 2,
      font_weight: 300,
    size: 5,
    x: 344,
    y: 88,
    colour: "midnight-blue"
  },
  confoederatio_website: {
    name: "<span style = 'font-size: 1.25vh; margin-right: 4vh;'>Confoederatio<br>Website</span>",
    animation: "confoederatio-website",
      font_position: "top-left",
      font_size: 1,
      font_weight: 500,
    size: 6,
    x: 360,
    y: 88,
    colour: "blue"
  },
  graphic_design: {
    name: "Graphic Design",
    animation: "graphic-design",
      font_position: "bottom-right",
      font_size: 2,
      font_weight: 700,
    is_base_node: true,
    size: 3,
    x: 396,
    y: 28,

    colour: "copper",
    dependencies: ["icons"]
  },
  icons: {
    name: "<span style = 'font-size: 3vh;'>Icons</span>",
    animation: "icons",
      font_position: "bottom-right",
      font_size: 1,
      font_weight: 300,
    size: 4,
    x: 396,
    y: 52,

    colour: "salmon"
  },
  landscape_and_cities: {
    name: "Landscapes & Cities",
    animation: "landscape-and-cities",
      font_position: "bottom-left",
      font_size: 2,
      font_weight: 500,
    default_pin: true,
    size: 2,
    x: 368,
    y: 52,

    colour: "mauve",
    dependencies: ["les_halles"]
  },
  london: {
    name: "<span style = 'font-size: 1.5vh;'>London</span>",
    animation: "london",
      font_position: "bottom-right",
      font_size: 2,
      font_weight: 700,
    size: 6,
    x: 408,
    y: 100,

    background_image: `gfx/interface/tiles/london_square.png`,
    background_opacity: 0.25,
    colour: "light-grey"
  },
  maps: {
    name: "Maps",
    animation: "maps",
      font_position: "bottom-left",
      font_size: 1,
      font_weight: 500,
    size: 4,
    x: 420,
    y: 76,

    colour: "yellow"
  },
  re_verenfedern: {
    name: "Ré Verenfedern",
    animation: "re-verenfedern",
      font_position: "bottom-left",
      font_size: 1,
      font_weight: 300,
    size: 5,
    x: 424,
    y: 32,

    background_image: `gfx/interface/tiles/re_verenfedern_square.png`,
    background_opacity: 0.4,
    colour: "light-blue",
    dependencies: ["art_triumph_and_tragedy"]
  },
  the_colorado: {
    name: "<span style = 'font-size: 1.25vh; margin-right: 4vh;'>The<br>Colorado</span>",
    animation: "the-colorado",
      font_position: "top-left",
      font_size: 1,
      font_weight: 300,
    size: 6,
    x: 408,
    y: 88,

    background_image: `gfx/interface/tiles/the_colorado_square.png`,
    background_opacity: 0.8,
    colour: "copper"
  },
  yosemite: {
    name: "<span style = 'font-size: 1.5vh;'>Yosemite</span>",
    animation: "yosemite",
      font_position: "centre",
      font_size: 1,
      font_weight: 700,
    size: 6,
    x: 408,
    y: 76,

    background_image: `gfx/interface/tiles/yosemite_square.png`,
    background_opacity: 0.4,
    colour: "forest-green"
  },
  
  art_projects: {
    name: "Art Projects",
    animation: "art-projects",
      font_position: "bottom-right",
      font_size: 3,
      font_weight: 700,
    default_pin: true,
    is_base_node: true,
    size: 1,
    x: 336,
    y: 32,

    background_image: `gfx/interface/tiles/adriatic_square.png`,
    background_opacity: 0.6,
    colour: "cream-white",
    dependencies: ["branding_logos", "anno", "landscape_and_cities"]
  },
  legacy_work: {
    name: "Legacy Work",
    animation: "legacy-work",
      font_position: "bottom-right",
      font_size: 2,
      font_weight: 700,
    is_base_node: true,
    size: 3,
    x: 420,
    y: 52,

    colour: "orange",
    dependencies: ["maps"]
  },
  les_halles: {
    name: "Les Halles",
    animation: "les-halles",
      font_position: "bottom-right",
      font_size: 2,
      font_weight: 700,
    default_pin: true,
    size: 1,
    x: 376,
    y: 80,

    background_image: `gfx/interface/tiles/les_halles_square.png`,
    background_opacity: 0.85,
    colour: "dark-grey",
    dependencies: ["the_colorado", "london", "brooklyn_bridge", "boats_on_a_pond", "armoured_advance", "yosemite"]
  },

  //Preservés (PRS)
  digital_preserves_atlases: {
    name: "Atlases",
    animation: "digital-preserves-atlases",
      font_position: "centre",
      font_size: 1,
      font_weight: 500,
    size: 4,
    x: 468,
    y: 68,

    colour: "salmon"
  },
  digital_preserves_maps: {
    name: "<span style = 'font-size: 1.75vh;'>Maps</span>",
    animation: "digital-preserves-maps",
      font_position: "top-left",
      font_size: 1,
      font_weight: 300,
    size: 6,
    x: 486,
    y: 68,

    colour: "midnight-blue"
  },
  physical_holdings_atlases: {
    name: "Atlases",
    animation: "physical-holdings-atlases",
      font_position: "centre",
      font_size: 1,
      font_weight: 500,
    size: 4,
    x: 502,
    y: 50,

    colour: "yellow"
  },
  physical_holdings_other_documents: {
    name: "<span style = 'font-size: 1.25vh;'>Other Documents</span>",
    animation: "physical-holdings-other-documents",
      font_position: "top-left",
      font_size: 1,
      font_weight: 300,
    size: 6,
    x: 520,
    y: 56,

    colour: "bright-yellow"
  },

  digital_preserves: {
    name: "Digital Preservés",
    animation: "digital-preserves",
      font_position: "bottom-right",
      font_size: 2,
      font_weight: 700,
    is_base_node: true,
    size: 1,
    x: 468,
    y: 36,

    colour: "sepia",
    dependencies: ["digital_preserves_atlases", "digital_preserves_maps"]
  },
  physical_holdings: {
    name: "Physical Holdings",
    animation: "physical-holdings",
      font_position: "bottom-right",
      font_size: 2,
      font_weight: 700,
    is_base_node: true,
    size: 1,
    x: 500,
    y: 68,

    colour: "gold",
    dependencies: ["physical_holdings_atlases", "physical_holdings_other_documents"]
  }
};
