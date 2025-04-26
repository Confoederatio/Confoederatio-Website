class Ministrat_Country {
  /**
   * @param {Object} [arg0_options]
   *  @param {String} arg0_options.id
   *  @param {String} arg0_options.name
   * 
   *  @param {Array<number, number, number>} arg0_options.colour
   *  @param {String} arg0_options.team - Either 'nato'/'wto'
   * 
   *  @param {number} [arg0_options.money=0]
   */
  constructor (arg0_options) {
    //Convert from parameters
    var options = (arg0_options) ? arg0_options : {};
    
    //Declare local instance variables
    this.id = options.id;
    this.tag = options.id;

    this.name = (options.name) ? 
      options.name : options.id;
    this.colour = (options.colour) ? 
      options.colour : [255, 255, 255];
    this.team = (options.team) ? 
      options.team : "nato";

    this.money = returnSafeNumber(options.money, 0);
    
    if (this.tag == "ddr") {
      var local_instance = this;
      setTimeout(function(){
        local_instance.loadHeatmap();
      }, 10000);
    }
  }

  loadHeatmap () {
    //Declare local instance variables
    var ministrat_canvas_overlay_el = document.querySelector(ministrat.config.map_elements.ministrat_canvas_selector);

    //Create heatmap element
    if (!this.heatmap)
      this.heatmap = new Ministrat_Heatmap(this.tag);
  }
}

//Initialise functions
{
  function loadMinistratCountries () {
    //Declare local reference variables
    var countries_obj = ministrat.gamestate.countries;

    //Load FRG
    countries_obj.brd = new Ministrat_Country({
      id: "brd",
      name: "Bundesrepublik Deutschland",
      colour: [114, 178, 140],
      team: "nato",
      money: 100
    });
    countries_obj.ddr = new Ministrat_Country({
      id: "ddr",
      name: "Deutsche Demokratische Republik",
      colour: [240, 60, 60],
      team: "wto",
      money: 100
    });
    countries_obj.nato = new Ministrat_Country({
      id: "nato",
      name: "NATO",
      colour: [60, 60, 240],
      team: "nato",
    });
    countries_obj.wto = new Ministrat_Country({
      id: "wto",
      name: "WTO",
      colour: [114, 40, 40],
      team: "wto",
    });
  }
}
