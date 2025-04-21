//Initialise banner namespace
{
  //Event handler function
  function homepageAboutOnScroll () { //[WIP] - Move this to a general parallax framework
    try {
      //Set main.vh
      main.vh = window.innerHeight/100;

      //Declare local instance variables
      var scroll_vh = window.scrollY/main.vh;
      var banner_obj = main.banner;

      //16vh offset
      banner_obj.about_me_overlay_title.style.transform = `translateY(${(16/160)*scroll_vh}vh)`;

      //24vh offset
      banner_obj.about_me_overlay_subtitle.style.opacity = (1/80)*(scroll_vh - 80);
      banner_obj.about_me_overlay_subtitle.style.transform = `translateY(${(48/160)*scroll_vh}vh)`;
      banner_obj.biography_overlay_subtitle.style.opacity = (1/80)*(scroll_vh - 80);
      banner_obj.biography_overlay_subtitle.style.transform = `translateY(${(48/160)*scroll_vh}vh)`;

      //20vh offset
      banner_obj.about_me_body_text.style.opacity = (1/80)*(scroll_vh - 80);
      banner_obj.about_me_body_text.style.transform = `translateY(${(56/160)*scroll_vh}vh)`;
      banner_obj.biography_body_text.style.opacity = (1/80)*(scroll_vh - 80);
      banner_obj.biography_body_text.style.transform = `translateY(${(56/160)*scroll_vh}vh)`;
    } catch (e) {
      console.log(e);
    }
  }
}
