//Other export functions
{
  /*
    adjustFontSize() - Adjusts the font size of an element to fit the container.
    options: {
      homepage_banner: (Boolean) - Optional. Whether the element is the homepage banner. False by default.
    }
  */
  function adjustFontSize (arg0_container_element, arg1_text_element, arg2_options) {
    //Convert from parameters
    var container_el = arg0_container_element;
    var text_el = arg1_text_element;
    var options = (arg2_options) ? arg2_options : {};

    //Declare local instance variables
    var container_width = container_el.offsetWidth;
    var text_width = text_el.offsetWidth;

    //Subtract from container_width if options.homepage_banner
    if (options.homepage_banner) {
      container_width -= banner_caret_element.offsetWidth;
      container_width -= banner_caret_spacer_element.offsetWidth;
    }

    var current_font_size = parseFloat(window.getComputedStyle(text_el).fontSize);
    var width_ratio = container_width/text_width;

    if (!text_el.hasAttribute("data-previous-font-size"))
      text_el.setAttribute("data-previous-font-size", current_font_size);

    var previous_font_size = parseFloat(text_el.getAttribute("data-previous-font-size"));
    ////Check if the text width exceeds container width
    if (text_width > container_width) {
      var local_iterations = 0;

      //Reduce font size until text fits within container
      while (text_width > container_width) {
        current_font_size -= 0.25;
        text_el.style.fontSize = `${current_font_size}px`;
        text_width = text_el.offsetWidth;

        if (options.homepage_banner) {
          banner_caret_element.style.fontSize = `${current_font_size}px`;
          banner_caret_spacer_element.style.fontSize = `${current_font_size}px`;
        }

        //Break after 10k iterations to prevent eternal loops
        local_iterations++;

        if (local_iterations > 1000) break;
      }
    } else {
      var local_iterations = 0;

      //If text becomes shorter, increase font size up to previous font size
      if (current_font_size < previous_font_size)
        while (text_width < container_width && current_font_size < previous_font_size) {
          current_font_size += 0.25;
          text_el.style.fontSize = `${current_font_size}px`;
          text_width = text_el.offsetWidth;

          //Break after 10k iterations to prevent eternal loops
          local_iterations++;

          if (local_iterations > 1000) break;
        }
    }

    //Clear font size cache if the font size has reached previous font size
    if (current_font_size >= previous_font_size)
      text_el.removeAttribute("data-previous-font-size");
  }

  function getOffset (arg0_element) {
    //Convert from parameters
    var el = arg0_element;

    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
  }

  function isElementAtTop (arg0_element) {
    //Convert from parameters
    var element = arg0_element;

    //Declare local instance variables
    const rect = element.getBoundingClientRect();

    //Return statement
    return (rect.top <= 1);
  }

  function isElementInViewport (arg0_element) {
    //Convert from parameters
    var el = arg0_element;

    //Declare local instance variables
    var local_bounds = el.getBoundingClientRect();

    //Return statement
    return (
      local_bounds.bottom > 0 &&
      local_bounds.right > 0 &&
      local_bounds.top < (window.innerHeight || document.documentElement.clientHeight) &&
      local_bounds.left < (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function resetAnimation (arg0_element) {
    //Convert from parameters
    var el = arg0_element;

    el.style.animation = 'none';
    el.offsetHeight; /* trigger reflow */
    el.style.animation = null;
  }
}
