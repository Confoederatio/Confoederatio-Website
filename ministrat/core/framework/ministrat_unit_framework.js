class Ministrat_Unit {
  /**
   * @param {Object} [arg0_options]
   *  @param {String} [arg0_options.id]
   *  @param {String} [arg0_options.country]
   *  @param {String} [arg0_options.name]
   *  @param {String} [arg0_options.type="infantry"] - Either 'air'/'armour'/'artillery'/'infantry'.
   *  @param {number} [arg0_options.x]
   *  @param {number} [arg0_options.y]
   */
  constructor (arg0_options) {
    //Convert from parameters
    var options = (arg0_options) ? arg0_options : {};

    //Declare local instance variables
    var has_name = (options.name != undefined);
    var has_no_id = (options.id == undefined);

    this.id = (options.id) ? options.id : generateRandomID();
    this.country = options.country;
    this.name = (options.name) ? 
      options.name : this.id;
    this.type = (options.type) ? 
      options.type : "infantry";

    this.height = 16;
    this.offset_x = ministrat.config.offset_x;
    this.offset_y = ministrat.config.offset_y;
    this.width = 16;
    this.x = returnSafeNumber(options.x, 0);
    this.y = returnSafeNumber(options.y, 0);

    if (has_name && has_no_id)
      this.id = this.name;

    //Draw unit on map
    this.draw();
  }

  draw () {
    //Declare local instance variables
    var icon_name_dictionary = {
      air: "aircraft",
      armour: "armour",
      artillery: "artillery",
      infantry: "infantry"
    };
    var map_overlay_el = ministrat.main.map_elements.map_overlay_el;
    var unit_el = document.getElementById(this.id);

    if (!unit_el) {
      var unit_icon_path = `./ministrat/gfx/unit_icons/${icon_name_dictionary[this.type]}_${this.country.toUpperCase()}_colour.png`;

      var unit_div = document.createElement("div");
        unit_div.id = this.id;
      var unit_img = document.createElement("img");
        unit_img.src = unit_icon_path;
        unit_img.style.width = `${this.width}px`;
        unit_img.style.height = `${this.height}px`;
      unit_div.appendChild(unit_img);

      var actual_coords = svgCoordsToHTMLCoords(this.x, this.y);

      unit_div.style.position = "absolute";
      unit_div.style.transform = `translate(${actual_coords[0] + this.width/1.5}px, ${actual_coords[1] - this.height/2}px)`;

      unit_div.onclick = function (e) {
        console.log(`Unit ${this.id} clicked`);
      };

      map_overlay_el.appendChild(unit_div);
    }
  }
}

//Initialise functions
{
  function loadMinistratUnits () {
    //Declare local instance variables
    var units_obj = ministrat.gamestate.units;

    loadMinistratUnitLocations();

    loadBRDArmyORBAT();
    loadDDRArmyORBAT();
    loadNATOArmyORBAT();
    loadWTOArmyORBAT();

    ministrat.config.all_locations = uniqueArray(ministrat.config.all_locations);
  }
}