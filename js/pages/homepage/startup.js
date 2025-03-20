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
  initGallery();
  initGalleryTiles();
}, 1);
