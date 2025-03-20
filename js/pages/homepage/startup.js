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
