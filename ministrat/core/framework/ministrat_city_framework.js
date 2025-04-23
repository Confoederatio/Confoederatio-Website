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
      var local_colour = `rgb(${country_obj.colour[0]}, ${country_obj.colour[1]}, ${country_obj.colour[2]})`;

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

      this.marker_el.style.fill = local_colour;
      this.marker_el.style.stroke = local_colour;

      var interior_label_el = this.label_el.querySelector("tspan");

      this.label_el.setAttribute("fill", local_colour);
      this.label_el.setAttribute("style", 
        this.label_el.getAttribute("style").replace(/fill\s*:\s*[^;]+;?/i, "")
      );
      interior_label_el.setAttribute("fill", local_colour);
      interior_label_el.setAttribute("style", 
        interior_label_el.getAttribute("style").replace(/fill\s*:\s*[^;]+;?/i, "")
      );
    }
  }
}

//Initialise functions
{
  function loadMinistratCities () {
    var cities_obj = ministrat.gamestate.cities;

    //Major West German Cities
    cities_obj.braunschweig = new Ministrat_City({
      controller: "brd",
      owner: "brd",
      label_selector: "#braunschweig",
      marker_selector: "#braunschweig-marker",
      size: 2
    });
    cities_obj.bremen = new Ministrat_City({
      controller: "brd",
      owner: "brd",
      label_selector: "#bremen",
      marker_selector: "#bremen-marker",
      size: 2
    });
    cities_obj.bremerhaven = new Ministrat_City({
      controller: "brd",
      owner: "brd",
      label_selector: "#bremerhaven",
      marker_selector: "#bremerhaven-marker",
      size: 2
    });
    cities_obj.darmstadt = new Ministrat_City({
      controller: "brd",
      owner: "brd",
      label_selector: "#darmstadt",
      marker_selector: "#darmstadt-marker",
      size: 2
    });
    cities_obj.frankfurt_am_main = new Ministrat_City({
      controller: "brd",
      owner: "brd",
      label_selector: "#frankfurt-am-main",
      marker_selector: "#frankfurt-am-main-marker",
      size: 2
    });
    cities_obj.goslar = new Ministrat_City({
      controller: "brd",
      owner: "brd",
      label_selector: "#goslar",
      marker_selector: "#goslar-marker",
      size: 2
    });
    cities_obj.hamburg = new Ministrat_City({
      controller: "brd",
      owner: "brd",
      label_selector: "#hamburg",
      marker_selector: "#hamburg-marker",
      size: 2
    });
    cities_obj.hannover = new Ministrat_City({
      controller: "brd",
      owner: "brd",
      label_selector: "#hannover",
      marker_selector: "#hannover-marker",
      size: 2
    });
    cities_obj.kassel = new Ministrat_City({
      controller: "brd",
      owner: "brd",
      label_selector: "#kassel",
      marker_selector: "#kassel-marker",
      size: 2
    });
    cities_obj.luebeck = new Ministrat_City({
      controller: "brd",
      owner: "brd",
      label_selector: "#luebeck",
      marker_selector: "#luebeck-marker",
      size: 2
    });
    cities_obj.oldenburg = new Ministrat_City({
      controller: "brd",
      owner: "brd",
      label_selector: "#oldenburg",
      marker_selector: "#oldenburg-marker",
      size: 2
    });
    cities_obj.west_berlin = new Ministrat_City({
      controller: "brd",
      owner: "brd",
      label_selector: "#west-berlin",
      marker_selector: "#west-berlin-marker",
      size: 2
    });
    cities_obj.wiesbaden = new Ministrat_City({
      controller: "brd",
      owner: "brd",
      label_selector: "#wiesbaden",
      marker_selector: "#wiesbaden-marker",
      size: 2
    });

    //Minor West German Cities
    cities_obj.goettingen = new Ministrat_City({
      controller: "brd",
      owner: "brd",
      label_selector: "#goettingen",
      marker_selector: "#goettingen-marker",
    });
  }
}