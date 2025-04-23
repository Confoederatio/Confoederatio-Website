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
  }
}