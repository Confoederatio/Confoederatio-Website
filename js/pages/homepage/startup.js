//Initialise main variable
window.main = {
  banner: {},
  gallery: {
    // Core elements
    scene: document.getElementById("scene"),
    parallax: new Parallax(document.getElementById("scene")),
    
    // Bookmark system
    bookmark_container: document.getElementById("project-parallax-bookmark-container"),
    bookmark_label: document.getElementById("project-parallax-bookmark-labels-container"),
    bookmark_minimise_btn: document.getElementById("project-parallax-bookmark-minimise-icon"),
    bookmark_scroll_x: 0,
    bookmark_preview_container: document.getElementById("project-parallax-preview-container"),
    bookmark_no_label: document.getElementById("project-parallax-no-bookmark-label"),
    bookmark_old_index: 1,
    bookmark_selected: "",
    bookmark_items: ["triumph_and_tragedy_two", "anno_1800", "les_halles"],
    
    // Content panel system
    content_panel_container: document.getElementById("main-parallax-content-panel-wrapper"),
    content_panel_scroll_container: document.getElementById("main-parallax-content-panel-scroll-wrapper"),
    content_panel_update_paused: false,
    
    // Parallax system
    parallax_body: document.getElementById("project-parallax-container"),
    parallax_container: document.getElementById("project-parallax-scroll-container"),
    parallax_buttons: document.getElementById("project-parallax-dots-container"),
    parallax_scroll_indicator: document.getElementById("project-parallax-scroll-fill-indicator"),
    parallax_current_scroll_x: 0,
    parallax_scroll_x: 0,
    parallax_selected: [],
    parallax_pinned_items: ["anno_1800", "triumph_and_tragedy_two", "les_halles", "brooklyn_bridge"],
    
    // Viewport dimensions
    viewport_height: document.documentElement.clientHeight/100,
    viewport_width: document.documentElement.clientWidth/100
  }
};

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
