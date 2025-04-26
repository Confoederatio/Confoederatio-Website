//Initialise functions
{
  function loadMinistratUIDrawLoop () {
    ministrat.ui_draw_loop = setInterval(function() {
      //Declare local instance variables
      var units_obj = ministrat.gamestate.units;
  
      //Map
      {
        //Iterate over all_units; draw all units
        var all_units = Object.keys(units_obj);
          
        for (var i = 0; i < all_units.length; i++) {
          var local_unit = units_obj[all_units[i]];

          local_unit.draw();
        }

        //Iterate over all_rasters; draw all rasters
        var all_rasters = Object.keys(ministrat.gamestate.rasters);
        var svg_origin = svgCoordsToHTMLCoords(0, 0);
        var svg_size = svgCoordsToHTMLCoords(1000, 1000);

        for (var i = 0; i < all_rasters.length; i++) {
          var local_raster = ministrat.gamestate.rasters[all_rasters[i]];

          local_raster.canvas.style.height = `${svg_size[1] - svg_origin[1]/2}px`; //Divide by 2 because the origin is at centre
        }
      }
    }, 100);
  }
}
