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

  deselect () {
    //Declare local instance variables
    var unit_el = document.getElementById(this.id);

    if (!unit_el) return; //Guard clause if unit doesn't exist

    unit_el.style.filter = "";
    removeElement(ministrat.main.selected_units, this.id);
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

      unit_el = document.createElement("div");
        unit_el.id = this.id;
      var unit_img = document.createElement("img");
        unit_img.src = unit_icon_path;
        unit_img.style.width = `${this.width}px`;
        unit_img.style.height = `${this.height}px`;
      unit_el.appendChild(unit_img);
      
      var unit_instance = this;
      unit_el.onclick = function (e) {
        deselectAllUnits();
        unit_instance.select();

        console.log(`Unit ${unit_instance.id} clicked`);
      };

      map_overlay_el.appendChild(unit_el);
    }

    var actual_coords = svgCoordsToHTMLCoords(this.x, this.y);

    this.display_x = actual_coords[0] - this.width/2;
    this.display_y = actual_coords[1] - this.height/2;

    unit_el.style.position = "absolute";
    unit_el.style.transform = `translate(${this.display_x}px, ${this.display_y}px)`;
  }

  select () {
    //Declare local instance variables
    var unit_el = document.getElementById(this.id);

    if (!unit_el) return; //Guard clause if unit doesn't exist
    if (this.country != ministrat.gamestate.player_tag) return; //Make sure player can only command their own units

    unit_el.style.filter = "brightness(100)";
    if (!ministrat.main.selected_units.includes(this.id))
      ministrat.main.selected_units.push(this.id);
  }
}

//Initialise functions
{
  function deselectAllUnits () {
    //Declare local instance variables
    var all_units = Object.keys(ministrat.gamestate.units);

    //Iterate over all units; deselect them
    for (var i = 0; i < all_units.length; i++) {
      var local_unit = ministrat.gamestate.units[all_units[i]];
      
      local_unit.deselect();
    }
  }

  function loadMinistratUnits () {
    //Declare local instance variables
    var units_obj = ministrat.gamestate.units;

    loadMinistratUnitLocations();

    loadBRDArmyORBAT();
    loadDDRArmyORBAT();
    loadNATOArmyORBAT();
    loadWTOArmyORBAT();

    ministrat.config.all_locations = uniqueArray(ministrat.config.all_locations);

    ministrat.draw_unit_loop = setInterval(function() {
      var all_units = Object.keys(units_obj);

      //Iterate over all units and draw them
      for (var i = 0; i < all_units.length; i++) {
        var local_unit = units_obj[all_units[i]];

        local_unit.draw();
      }
    }, 100);
  }

  function unitSelectionHandler (arg0_x, arg1_y, arg2_width, arg3_height) {
    //Convert from parameters
    var coord_x = returnSafeNumber(arg0_x, 0);
    var coord_y = returnSafeNumber(arg1_y, 0);
    var width = returnSafeNumber(arg2_width, 0);
    var height = returnSafeNumber(arg3_height, 0);

    //Declare local instance variables
    var all_units = Object.keys(ministrat.gamestate.units);
    var selected_units = [];

    //Deselect all units first
    deselectAllUnits();

    //Iterate over all_units; check if each unit is within the selection box
    for (var i = 0; i < all_units.length; i++) {
      var local_unit = ministrat.gamestate.units[all_units[i]];

      if (local_unit.display_x <= coord_x + width && local_unit.display_x + local_unit.width >= coord_x && local_unit.display_y <= coord_y + height && local_unit.display_y + local_unit.height >= coord_y)
        local_unit.select();
    }

    console.log(ministrat.main.selected_units);

    //Return statement
    return selected_units;
  }
}