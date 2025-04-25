class Ministrat_City {
  constructor (arg0_options) {
    //Convert from parameters
    var options = (arg0_options) ? arg0_options : {};

    //Declare local instance variables
    var cities_dom = ministrat.main.map_elements.cities_dom;

    this.controller = (options.controller) ? 
      options.controller : "neutral";
    this.owner = (options.owner) ? 
      options.owner : "neutral";
    this.is_capital = (options.is_capital) ? 
      options.is_capital : false;
    this.label_selector = options.label_selector;
    this.marker_selector = options.marker_selector;
    this.size = returnSafeNumber(options.size, 1);

    //1. Fetch .label_el; .marker_el
    this.label_el = cities_dom.querySelector(this.label_selector);
    this.marker_el = cities_dom.querySelector(this.marker_selector);

    //2. Fetch .name field from label_selector
    this.name = (!options.name) ? 
      this.label_el.textContent : options.name;
    
    //Set colour
    this.draw();
  }

  draw () {
    //Declare local instance variables
    var country_obj = ministrat.gamestate.countries[this.owner];

    if (country_obj) {
      var adjusted_label_colour = [
        Math.min(255, country_obj.colour[0] + 20),
        Math.min(255, country_obj.colour[1] + 20),
        Math.min(255, country_obj.colour[2] + 20)
      ];
      var local_colour = `rgb(${adjusted_label_colour[0]}, ${adjusted_label_colour[1]}, ${adjusted_label_colour[2]})`;

      //Convert image to rect so we can draw the actual colour
      if (this.marker_el.tagName == "image") {
        var image_el = this.marker_el;
        var rect_el = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect_el.setAttribute('x', image_el.getAttribute('x'));
        rect_el.setAttribute('y', image_el.getAttribute('y'));
        rect_el.setAttribute('width', image_el.getAttribute('width'));
        rect_el.setAttribute('height', image_el.getAttribute('height'));
        rect_el.setAttribute('id', image_el.getAttribute('id'));
        
        image_el.parentNode.replaceChild(rect_el, image_el);
        this.marker_el = rect_el;
      }

      if (!this.is_capital) {
        this.marker_el.style.fill = local_colour;
        this.marker_el.style.stroke = local_colour;
      } else {
        this.marker_el.style.fill = `rgb(240, 216, 120)`;
        this.marker_el.style.stroke = `rgb(240, 216, 120)`;
      }

      var interior_label_els = this.label_el.querySelectorAll("tspan");

      this.label_el.setAttribute("fill", local_colour);
      this.label_el.setAttribute("style", 
        this.label_el.getAttribute("style").replace(/fill\s*:\s*[^;]+;?/i, "")
      );
      for (var i = 0; i < interior_label_els.length; i++) {
        interior_label_els[i].setAttribute("fill", local_colour);
        interior_label_els[i].setAttribute("style", 
          interior_label_els[i].getAttribute("style").replace(/fill\s*:\s*[^;]+;?/i, "")
        );
      }

      if (this.is_capital)
        for (var i = 0; i < interior_label_els.length; i++) {
          interior_label_els[i].style.fontWeight = "700";
          interior_label_els[i].style.textDecoration = "underline";
        }
    }
  }
}

//Initialise functions
{
  
}