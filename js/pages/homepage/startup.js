//Initialise main variable
window.main = {
  banner: {},
  gallery: {
    //Viewport dimensions
    viewport_height: document.documentElement.clientHeight/100,
    viewport_width: document.documentElement.clientWidth/100,

    //UI Patterns
    exempt_id_patterns: [
      "body-text",
      "btn",
      "content-panel", 
      "development-date",
      "divider",
      "indicator",
      "preview",
      "project-parallax-bookmark-label",
      "project-parallax-bookmark-minimise-icon",
      "project-parallax-bookmark-text-icon",
      "status",
      "text-wrapper",
      "title"
    ],
    panel_id_patterns: [
      "body-text",
      "content-panel",
      "development-date", 
      "divider",
      "indicator",
      "preview",
      "project-parallax-bookmark-label",
      "project-parallax-bookmark-minimise-icon",
      "project-parallax-bookmark-text-icon",
      "status",
      "text-wrapper",
      "title"
    ],

    //State variables
    can_scroll_further: false,
    closing_bookmark: false,

    //Parallax settings configuration
    parallax: new Parallax(document.getElementById("scene")),
    parallax_settings: {
      //Technical
      anno_1800: {
        animation: "anno-1800"
      },
      universal_bot_framework: {
        animation: "universal-bot-framework"
      },
      triumph_and_tragedy_mod_creator: {
        animation: "triumph-and-tragedy-mod-creator"
      },
      triumph_and_tragedy_two: {
        animation: "triumph-and-tragedy-two",
        dependencies: ["system_dynamics", "into_modernity", "last_man_standing", "proxy_cables"]
      },
      system_dynamics: {
        animation: "system-dynamics"
      },
      into_modernity: {
        animation: "into-modernity"
      },
      proxy_cables: {
        animation: "proxy-cables"
      },
      last_man_standing: {
        animation: "last-man-standing"
      },
      grand_strategy: {
        dependencies: ["eleven_fiftynine", "empires_undone"]
      },
      empires_undone: {
        animation: "empires-undone",
        dependencies: ["hoi4_map_renderer"]
      },
      eleven_fiftynine: {
        animation: "eleven-fiftynine"
      },
      hoi4_map_renderer: {
        animation: "hoi4-map-renderer"
      },
      other_technical_projects: {
        dependencies: ["js_in_4", "project_trinity"]
      },
      project_trinity: {
        animation: "project-trinity"
      },
      js_in_4: {
        animation: "js-in-4"
      },

      //Artistic
      finished_works: {
        dependencies: ["armoured_advance", "brooklyn_bridge"]
      },
      armoured_advance: {
        animation: "armoured-advance"
      },
      brooklyn_bridge: {
        animation: "brooklyn-bridge",
        dependencies: ["the_colorado", "resolute", "les_halles"]
      },
      the_colorado: {
        animation: "the-colorado"
      },
      resolute: {
        animation: "resolute",
        dependencies: ["boats_on_a_pond"]
      },
      les_halles: {
        animation: "les-halles",
        dependencies: ["boats_on_a_pond"]
      },
      boats_on_a_pond: {
        animation: "boats-on-a-pond"
      },
      other_sketches: {
        dependencies: ["clouds_and_sunset", "sinking_of_a_battleship"]
      },
      clouds_and_sunset: {
        animation: "clouds-and-sunset",
        dependencies: ["journal_sketches"]
      },
      sinking_of_a_battleship: {
        animation: "sinking-of-a-battleship",
        dependencies: ["journal_sketches"]
      },
      journal_sketches: {
        animation: "journal-sketches",
        dependencies: ["sketch_one", "past", "sketch_two", "broken_mirror"]
      },
      sketch_one: {
        animation: "sketch-one"
      },
      past: {
        animation: "past"
      },
      sketch_two: {
        animation: "sketch-two"
      },
      broken_mirror: {
        animation: "broken-mirror"
      },

      //Cartographic
      historical_atlas_of_the_modern_world: {
        dependencies: ["the_adriatic"]
      },
      the_adriatic: {
        animation: "the-adriatic"
      }
    }
  }
};

//Initialise main
var common_selectors = config.homepage.defines.common.selectors;

//Add common_selectors to main
var all_viewport_one_selectors = Object.keys(common_selectors.viewport_one);
var all_viewport_two_selectors = Object.keys(common_selectors.viewport_two);

//Iterate over all viewport one selectors
for (var i = 0; i < all_viewport_one_selectors.length; i++)
  main.banner[all_viewport_one_selectors[i]] = common_selectors.viewport_one[all_viewport_one_selectors[i]];
//Iterate over all viewport two selectors
for (var i = 0; i < all_viewport_two_selectors.length; i++)
  main.gallery[all_viewport_two_selectors[i]] = common_selectors.viewport_two[all_viewport_two_selectors[i]];

//There are two bodies for some reason! Where did that mess come from?
var all_bodies = document.querySelectorAll("body");
all_bodies[0].remove();

//Hack fix for glitched elements
setTimeout(function(){
  //Viewport 1
  //Start top-banner animation for homepage
  homepageBannerAnimation();

  settings_btn.setAttribute("class", "settings-btn hidden");

  //Viewport 2
  //Gallery
  initGalleryUI();
  initGalleryTiles();
}, 1);

setTimeout(function(){
  //Viewport 2
  //Initialise magnifiers for all .art-preview-image elements
  var all_art_preview_imgs = document.querySelectorAll(".art-preview-image-container");
  console.log(all_art_preview_imgs)

  for (var i = 0; i < all_art_preview_imgs.length; i++) magnify(
    all_art_preview_imgs[i].querySelector("img"),
    3
  );
}, 650);
