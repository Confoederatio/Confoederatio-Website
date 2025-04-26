class Ministrat_Heatmap {
  constructor (arg0_tag, arg1_type) {
    //Convert from parameters
    var tag = (arg0_tag) ? arg0_tag : "";
    var type = (arg1_type) ? arg1_type : "infantry";

    //Declare local instance variables
    var map_defines = ministrat.config.defines.map;
    var ministrat_canvas_overlay_el = document.querySelector(ministrat.config.elements.map.ministrat_canvas_selector);
    var ministrat_terrain_canvas_el = document.querySelector(ministrat.config.elements.map.ministrat_terrain_canvas_selector);

    
    this.heatmap_downscale_factor = Math.floor(map_defines.pathfind_downscale_factor*map_defines.px_per_km);
    this.id = `${tag}-${type}-flowfield-heatmap`;
    this.type = type;

    //Create canvas element
    this.canvas = document.createElement("canvas");
    this.canvas.id = this.id;
    this.canvas.width = 1000;
    this.canvas.height = 1000;

    //Create context
    this.ctx = this.canvas.getContext("2d");
    
    ministrat_canvas_overlay_el.appendChild(this.canvas);
    var local_instance = this;
    setTimeout(function () {
      local_instance.draw();
    }, 1000);

    //Set Ministrat_Heatmap in ministrat.gamestate.rasters
    ministrat.gamestate.rasters[this.id] = this;
  }

  draw () {
    //Declare local instance variables
    var terrain_canvas_el = document.querySelector(ministrat.config.elements.map.ministrat_terrain_canvas_selector);
    var terrain_obj = ministrat.config.terrain;

    //Populate terrain_cost map
    var terrain_cost_map = {
      "0,0,0": -9999
    };

    //Iterate over all_terrains
    var all_terrains = Object.keys(terrain_obj);
    var heatmap_data = this.ctx.createImageData(this.canvas.width, this.canvas.height);
    var max_value = null;
    var min_value = null;

    for (var i = 0; i < all_terrains.length; i++) {
      var local_terrain = terrain_obj[all_terrains[i]];

      if (local_terrain.colour)
        terrain_cost_map[local_terrain.colour.join(",")] = returnSafeNumber(local_terrain.modifiers[this.type].movement*100, 0);
    }

    //Draw terrain cost first
    if (terrain_canvas_el) {
      var terrain_ctx = terrain_canvas_el.getContext("2d");
      var terrain_data = terrain_ctx.getImageData(0, 0, terrain_canvas_el.width, terrain_canvas_el.height);
      
      console.log(terrain_data);
      for (var i = 0; i < terrain_canvas_el.height; i++)
        for (var x = 0; x < terrain_canvas_el.width; x++) {
          var local_index = (i*terrain_canvas_el.width + x)*4;

          var local_colour = [
            terrain_data.data[local_index],
            terrain_data.data[local_index + 1],
            terrain_data.data[local_index + 2]
          ];

          if (terrain_cost_map[local_colour.join(",")] != undefined) {
            var local_cost = terrain_cost_map[local_colour.join(",")];
            var local_heatmap_colour = encodeNumberAsRGBA(local_cost);
            //console.log(local_cost, local_heatmap_colour);

            if (max_value == null || local_cost > max_value)
              if (local_cost != -9999)
                max_value = local_cost;
            if (min_value == null || local_cost < min_value)
              if (local_cost != -9999)
                min_value = local_cost;

            heatmap_data.data[local_index] = local_heatmap_colour[0];
            heatmap_data.data[local_index + 1] = local_heatmap_colour[1];
            heatmap_data.data[local_index + 2] = local_heatmap_colour[2];
            heatmap_data.data[local_index + 3] = local_heatmap_colour[3];
          }
        }
    }

    //Define internal helper functions
    {
      var local_instance = this;
      this.addMultipleBlockDropoffs = function (arg0_centres, arg1_max_values, arg2_downscaleFactor) {
        //Convert from parameters
        var centres = getList(arg0_centres);
        var max_values = getList(arg1_max_values);
        var downscaleFactor = arg2_downscaleFactor || 4; // Default downscale factor

        if (downscaleFactor < 1) {
          console.warn("Downscale factor must be 1 or greater. Setting to 1.");
          downscaleFactor = 1;
        }
        // Ensure integer factor for simplicity, floor avoids potential issues
        downscaleFactor = Math.max(1, Math.floor(downscaleFactor)); 

        //Calculate downscaled dimensions
        const originalWidth = local_instance.canvas.width;
        const originalHeight = local_instance.canvas.height;
        const downscaledWidth = Math.floor(originalWidth/downscaleFactor);
        const downscaledHeight = Math.floor(originalHeight/downscaleFactor);

        var value_buffer = new Float32Array(downscaledWidth * downscaledHeight); // Initialized to 0

        for (var i = 0; i < max_values.length; i++)
          max_value = Math.max(max_value, max_values[i]); // Assuming max_value is accessible in this scope

        // --- Core Logic on Downscaled Grid ---
        for (var i = 0; i < centres.length; i++) {
          // Map centre coordinates to the downscaled grid
          var downscaled_centre_x = Math.floor(centres[i][0] / downscaleFactor);
          var downscaled_centre_y = Math.floor(centres[i][1] / downscaleFactor);
          var local_max_value = max_values[i];

          // Clamp coordinates to be within the downscaled bounds
          downscaled_centre_x = Math.max(0, Math.min(downscaledWidth - 1, downscaled_centre_x));
          downscaled_centre_y = Math.max(0, Math.min(downscaledHeight - 1, downscaled_centre_y));

          // Iterate over the DOWNSCALED grid
          for (var dx = 0; dx < downscaledWidth; dx++) {
            for (var dy = 0; dy < downscaledHeight; dy++) {
              var local_distance = Math.abs(dx - downscaled_centre_x) + Math.abs(dy - downscaled_centre_y);
              var local_value = local_max_value - local_distance;
              var buffer_index = dy * downscaledWidth + dx;

              // Check if the new value is greater OR if the buffer spot is still the initial zero
              if (local_value > value_buffer[buffer_index] || i == 0) { // The == 0 check is redundant if buffer initializes to 0 and local_value > 0
                  value_buffer[buffer_index] = local_value;

                  // Update min_value (Assuming min_value is accessible in this scope)
                  // This min_value now reflects the minimum calculated on the downscaled grid
                  if (local_value < min_value)
                    min_value = local_value;
              }
            }
          }
        }

        // --- Upscaling and Applying to Heatmap Data ---
        const targetData = heatmap_data.data; // Direct reference for potential speedup

        for (let y = 0; y < originalHeight; y++) {
          for (let x = 0; x < originalWidth; x++) {
            // Find the corresponding pixel in the DOWNSCALED buffer (Nearest Neighbor)
            const dx = Math.min(downscaledWidth - 1, Math.floor(x / downscaleFactor));
            const dy = Math.min(downscaledHeight - 1, Math.floor(y / downscaleFactor));
            const buffer_index = dy * downscaledWidth + dx;

            const value_from_buffer = value_buffer[buffer_index];

            // Only proceed if there's a value contribution from the buffer
            if (true) {
              const pixelIndex = (y * originalWidth + x) * 4;

              // Get current value from heatmap_data if it exists (alpha > 0)
              let currentValue = 0;
              currentValue = decodeRGBAAsNumber([
                targetData[pixelIndex],
                targetData[pixelIndex + 1],
                targetData[pixelIndex + 2],
                targetData[pixelIndex + 3]
              ]);

              // Add the buffer value to the existing value
              const newValue = currentValue + value_from_buffer;

              // Encode the new value back into RGBA
              const rgba = encodeNumberAsRGBA(newValue);

              // Update the actual heatmap pixel data
              if (currentValue != -9999) {
                targetData[pixelIndex] += rgba[0];
                targetData[pixelIndex + 1] += rgba[1];
                targetData[pixelIndex + 2] += rgba[2];
                targetData[pixelIndex + 3] += rgba[3];
              }
            }
          }
        }
      };
    }

    //Set per unit dropoffs
    var unit_coordinates = [];
    var unit_values = [];

    //Iterate over all_units
    var all_units = Object.keys(ministrat.gamestate.units);

    for (var i = 0; i < all_units.length; i++) {
      var local_unit = ministrat.gamestate.units[all_units[i]];

      if (local_unit.country == "brd") {
          unit_coordinates.push([local_unit.x + ministrat.config.defines.map.canvas_offset[0], local_unit.y + ministrat.config.defines.map.canvas_offset[1]]);
          unit_values.push(20);
      }
    }

    console.log(unit_coordinates, unit_values);

    this.addMultipleBlockDropoffs(unit_coordinates, unit_values, this.heatmap_downscale_factor);

    //Draw heatmap in Viridis
    var total_range = max_value - min_value;
    console.log(total_range, max_value, min_value);

    for (var i = 0; i < this.canvas.height; i++)
      for (var x = 0; x < this.canvas.width; x++) {
        var local_index = (i*this.canvas.width + x)*4;

        //[WIP] - Make sure pixel is valid
        {
          var local_value = decodeRGBAAsNumber([
            heatmap_data.data[local_index],
            heatmap_data.data[local_index + 1],
            heatmap_data.data[local_index + 2],
            heatmap_data.data[local_index + 3]
          ]);
  
          var local_fraction = (local_value - min_value)/total_range;
  
          //console.log(local_fraction);
          var local_colour = hexToRGB(d3.interpolateMagma(local_fraction));
  
          if (local_value != 9999) {
            heatmap_data.data[local_index] = local_colour[0];
            heatmap_data.data[local_index + 1] = local_colour[1];
            heatmap_data.data[local_index + 2] = local_colour[2];
            heatmap_data.data[local_index + 3] = 255;
          }
        }
      }
    
    this.ctx.putImageData(heatmap_data, 0, 0);
  }
}