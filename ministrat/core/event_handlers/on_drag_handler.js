//Initialise functions
{
  function clearSelectionBox () {
    //Declare local instance variables
    var map_overlay_el = ministrat.main.map_elements.map_overlay_el;
    var selection_box_el = map_overlay_el.querySelector(".selection-box");

    //Remove selection box
    if (selection_box_el)
      selection_box_el.remove();
  }

  function drawSelectionBox () {
    var map_overlay_el = ministrat.main.map_elements.map_overlay_el;
    var selection_box_el = map_overlay_el.querySelector(".selection-box");

    if (!selection_box_el) {
      selection_box_el = document.createElement("div");
      selection_box_el.setAttribute("class", "selection-box");
      selection_box_el.style.position = "absolute";
      selection_box_el.style.border = "1px solid green";
      selection_box_el.style.background = "rgba(0, 255, 0, 0.2)";
      selection_box_el.style.pointerEvents = "none";

      map_overlay_el.appendChild(selection_box_el);
    }

    var height = Math.abs(ministrat.main.map.end_y - ministrat.main.map.start_y);
    var left = Math.min(ministrat.main.map.start_x, ministrat.main.map.end_x);
    var top = Math.min(ministrat.main.map.start_y, ministrat.main.map.end_y);
    var width = Math.abs(ministrat.main.map.end_x - ministrat.main.map.start_x);

    selection_box_el.style.left = `${left}px`;
    selection_box_el.style.top = `${top}px`;
    selection_box_el.style.width = `${width}px`;
    selection_box_el.style.height = `${height}px`;
  }

  function loadMinistratPanHandler () {
    var map_el = ministrat.main.map_elements.main_map_el;
    var map_overlay_el = ministrat.main.map_elements.map_overlay_el;

    // Computer support
    map_el.addEventListener("mousedown", function (e) {
      if (!ministrat.game_open) return;

      var rect = map_overlay_el.getBoundingClientRect();
      var relativeX = e.clientX;
      var relativeY = e.clientY;

      var actual_coords = getSVGCoords(relativeX, relativeY);

      if (e.shiftKey) {
        ministrat.is_selecting = true;
        ministrat.main.map.start_x = actual_coords[0];
        ministrat.main.map.start_y = actual_coords[1];
        ministrat.main.map.end_x = actual_coords[0];
        ministrat.main.map.end_y = actual_coords[1];

        drawSelectionBox();
      } else {
        ministrat.is_dragging = true;
        ministrat.main.map.start_x = e.clientX;
        ministrat.main.map.start_y = e.clientY;
      }

      e.preventDefault();
    });

    map_el.addEventListener("mousemove", function (e) {
      if (!ministrat.game_open) return;
      if (!ministrat.is_dragging && !ministrat.is_selecting) return;

      var rect = map_overlay_el.getBoundingClientRect();
      var relativeX = e.clientX;
      var relativeY = e.clientY;

      var actual_coords = getSVGCoords(relativeX, relativeY);

      if (ministrat.is_selecting) {
        ministrat.main.map.end_x = actual_coords[0];
        ministrat.main.map.end_y = actual_coords[1];

        drawSelectionBox();
      } else if (ministrat.is_dragging) {
        var delta_x = e.clientX - ministrat.main.map.start_x;
        var delta_y = e.clientY - ministrat.main.map.start_y;

        ministrat.main.map.x += delta_x;
        ministrat.main.map.y += delta_y;
        ministrat.main.map.start_x = e.clientX;
        ministrat.main.map.start_y = e.clientY;

        updateMapCoords();
      }
    });

    ["mouseup", "mouseleave"].forEach((eventName) => {
      map_el.addEventListener(eventName, () => {
        if (!ministrat.game_open) return;
        ministrat.is_dragging = false;

        if (ministrat.is_selecting) {
          ministrat.is_selecting = false;
          clearSelectionBox();
        }
      });
    });

    // Mobile support
    map_el.addEventListener("touchstart", function (e) {
      if (!ministrat.game_open) return;
      if (e.touches.length != 1) return;

      var rect = map_overlay_el.getBoundingClientRect();
      var touch = e.touches[0];
      var relativeX = touch.clientX - rect.left;
      var relativeY = touch.clientY - rect.top;

      ministrat.is_selecting = true;
      ministrat.main.map.start_x = relativeX;
      ministrat.main.map.start_y = relativeY;
      ministrat.main.map.end_x = relativeX;
      ministrat.main.map.end_y = relativeY;

      drawSelectionBox();

      e.preventDefault();
    }, { passive: false });

    map_el.addEventListener("touchmove", function (e) {
      if (!ministrat.game_open) return;
      if (!ministrat.is_selecting || e.touches.length != 1) return;

      var rect = map_overlay_el.getBoundingClientRect();
      var touch = e.touches[0];
      var relativeX = touch.clientX - rect.left;
      var relativeY = touch.clientY - rect.top;

      ministrat.main.map.end_x = relativeX;
      ministrat.main.map.end_y = relativeY;

      drawSelectionBox();

      e.preventDefault();
    }, { passive: false });

    map_el.addEventListener("touchend", function (e) {
      if (!ministrat.game_open) return;
      if (ministrat.is_selecting) {
        ministrat.is_selecting = false;
        clearSelectionBox();
      }
    });
  }
}
