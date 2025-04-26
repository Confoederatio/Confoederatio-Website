//Initialise functions
{
  function loadMinistratTerrain () {
    //Declare local instance variables
    var canvas = document.querySelector(ministrat.config.map_elements.ministrat_terrain_canvas);
    var ctx = canvas.getContext("2d");
    var terrain_image_path = `./ministrat/map/ministrat_terrain.png`;

    var image = new Image();
    image.crossOrigin = "anonymous";
    image.src = terrain_image_path;

    image.onload = function (e) {
      var actual_coords = svgCoordsToHTMLCoords(0, 0);
      var x_offset = -window.innerHeight*ministrat.config.defines.map.svg_vh_offset[0];
      var y_offset = -window.innerHeight*ministrat.config.defines.map.svg_vh_offset[1];
      
      ctx.drawImage(image, actual_coords[0], actual_coords[1], 1000 + x_offset, 1000 + y_offset);
    };
  }
}
