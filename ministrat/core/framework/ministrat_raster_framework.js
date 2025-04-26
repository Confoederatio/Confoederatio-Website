class Ministrat_Heatmap {
  constructor (arg0_tag, arg1_type) {
    //Convert from parameters
    var tag = (arg0_tag) ? arg0_tag : "";
    var type = (arg1_type) ? arg1_type : "infantry";

    //Declare local instance variables
    var ministrat_canvas_overlay_el = document.querySelector(ministrat.config.map_elements.ministrat_canvas_selector);
    var ministrat_terrain_canvas_el = document.querySelector(ministrat.config.map_elements.ministrat_terrain_canvas);

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
  }

  draw () {
    //Declare local instance variables
    var terrain_canvas_el = document.querySelector(ministrat.config.map_elements.ministrat_terrain_canvas);
    var terrain_obj = ministrat.config.terrain;

    //Populate terrain_cost map
    var terrain_cost_map = {
      "0,0,0": -Infinity
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

    console.log(terrain_cost_map);

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
              if (isFinite(local_cost))
                max_value = local_cost;
            if (min_value == null || local_cost < min_value)
              if (isFinite(local_cost))
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
      this.addMultipleBlockDropoffs = function (centers, maxValues) {
        for (var i = 0; i < maxValues.length; i++) {
          max_value = Math.max(max_value, maxValues[i]);
        }
  
        // Create a value buffer the same size as the canvas
        const valueBuffer = new Float32Array(local_instance.canvas.width * local_instance.canvas.height);
        
        // Process each center point
        for (let c = 0; c < centers.length; c++) {
          const centerX = centers[c][0];
          const centerY = centers[c][1];
          const maxValue = maxValues[c];
          
          // Calculate the bounding box - with Manhattan distance, this is a diamond
          // but we'll use a square bounding box for simplicity
          const maxRadius = maxValue;
          const minX = Math.max(0, Math.floor(centerX - maxRadius));
          const maxX = Math.min(local_instance.canvas.width - 1, Math.ceil(centerX + maxRadius));
          const minY = Math.max(0, Math.floor(centerY - maxRadius));
          const maxY = Math.min(local_instance.canvas.height - 1, Math.ceil(centerY + maxRadius));
          
          // Only process pixels within the bounding box
          for (let y = minY; y <= maxY; y++) {
            for (let x = minX; x <= maxX; x++) {
              // Calculate Manhattan distance (much faster than Euclidean)
              const distance = Math.abs(x - centerX) + Math.abs(y - centerY);
              
              // Value drops by 1 for each step outward
              const value = Math.max(maxValue - distance, 0);
              
              // Only modify if there's a value to add
              if (value > 0) {
                const bufferIndex = y * local_instance.canvas.width + x;
                // Add the value to our buffer
                valueBuffer[bufferIndex] += value;
              }
            }
          }
        }
        
        // Now apply the accumulated values to the actual image data
        for (let i = 0; i < valueBuffer.length; i++) {
          if (valueBuffer[i] > 0) {
            const pixelIndex = i * 4;
            
            // Get current value if it exists
            let currentValue = 0;
            if (heatmap_data.data[pixelIndex + 3] > 0) {
              currentValue = decodeRGBAAsNumber([
                heatmap_data.data[pixelIndex],
                heatmap_data.data[pixelIndex + 1],
                heatmap_data.data[pixelIndex + 2],
                heatmap_data.data[pixelIndex + 3]
              ]);
            }
            
            // Add the buffer value to the existing value
            const newValue = currentValue + valueBuffer[i];
            
            // Encode the new value back into RGBA
            const rgba = encodeNumberAsRGBA(newValue);
            
            // Update the pixel data
            heatmap_data.data[pixelIndex] = rgba[0];
            heatmap_data.data[pixelIndex + 1] = rgba[1];
            heatmap_data.data[pixelIndex + 2] = rgba[2];
            heatmap_data.data[pixelIndex + 3] = rgba[3];
          }
        }
      }
    }

    this.addMultipleBlockDropoffs([[100, 200], [150, 200], [500, 500]], [50, 20, 100]);

    //Draw heatmap in Viridis
    var total_range = max_value - min_value;

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
  
          heatmap_data.data[local_index] = local_colour[0];
          heatmap_data.data[local_index + 1] = local_colour[1];
          heatmap_data.data[local_index + 2] = local_colour[2];
          heatmap_data.data[local_index + 3] = 255;
        }
      }
    
    this.ctx.putImageData(heatmap_data, 0, 0);
  }
}