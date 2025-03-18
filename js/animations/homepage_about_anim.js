//Declare local element variables
var about_me_body_text = document.getElementById("about-me-body-text");
var about_me_overlay_title = document.getElementById("about-me-overlay-title");
var about_me_overlay_subtitle = document.getElementById("about-me-overlay-subtitle");
var biography_body_text = document.getElementById("biography-body-text");
var biography_overlay_subtitle = document.getElementById("biography-overlay-subtitle");

//Event handler function
function homepageAboutOnScroll () {
  try {
    //Declare local instance variables
    var scroll_vh = window.scrollY/vh;

    //16vh offset
    about_me_overlay_title.style.transform = `
      translateY(${(16/160)*scroll_vh}vh)
    `;

    //24vh offset
    about_me_overlay_subtitle.style.transform = `
      translateY(${(48/160)*scroll_vh}vh)
    `;
    biography_overlay_subtitle.style.transform = `
      translateY(${(48/160)*scroll_vh}vh)
    `;
    about_me_overlay_subtitle.style.opacity = (1/80)*(scroll_vh-80);
    biography_overlay_subtitle.style.opacity = (1/80)*(scroll_vh-80);

    //20vh offset
    about_me_body_text.style.transform = `
      translateY(${(56/160)*scroll_vh}vh)
    `;
    biography_body_text.style.transform = `
      translateY(${(56/160)*scroll_vh}vh)
    `;
    about_me_body_text.style.opacity = (1/80)*(scroll_vh-80);
    biography_body_text.style.opacity = (1/80)*(scroll_vh-80);
  } catch {}
}
