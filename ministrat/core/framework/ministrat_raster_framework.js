class Ministrat_Heatmap {
  constructor (arg0_tag) {
    //Convert from parameters
    var tag = (arg0_tag) ? arg0_tag : "";

    //Declare local instance variables
    var ministrat_canvas_overlay_el = document.querySelector(ministrat.config.map_elements.ministrat_canvas_selector);

    this.id = `${tag}-flowfield-heatmap`;

    //Create canvas element
    this.canvas = document.createElement("canvas");
    this.canvas.id = this.id;
    this.canvas.width = 1000;
    this.canvas.height = 1000;

    //Create context
    this.ctx = this.canvas.getContext("2d");
    
    ministrat_canvas_overlay_el.appendChild(this.canvas);
  }

  draw () {
    //Declare local instance variables
    var terrain_canvas_el = document.querySelector(ministrat.config.map_elements.ministrat_terrain_canvas);

    //Draw terrain cost first
    if (terrain_canvas_el) {
    }
  }
}