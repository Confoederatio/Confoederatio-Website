//Initialise functions
{
  function loadMinistratPanHandler (e) {
    //Declare local reference variables
    var map_el = ministrat.main.map_elements.main_map_el;

    //Computer support
    map_el.addEventListener("mousedown", function (e) {
      ministrat.is_dragging = true;
      ministrat.main.map.start_x = e.clientX;
      ministrat.main.map.start_y = e.clientY;

      //Prevent default behaviour
      e.preventDefault();
    });

    map_el.addEventListener("mousemove", function (e) {
      if (!ministrat.is_dragging) return;

      var delta_x = e.clientX - ministrat.main.map.start_x;
      var delta_y = e.clientY - ministrat.main.map.start_y;

      ministrat.main.map.x += delta_x;
      ministrat.main.map.y += delta_y;
      ministrat.main.map.start_x = e.clientX;
      ministrat.main.map.start_y = e.clientY;

      updateMapCoords();
    });
    
    ["mouseup", "mouseleave"].forEach((e) => {
      map_el.addEventListener(e, () => {
        ministrat.is_dragging = false;
      })
    });

    //Mobile support
    map_el.addEventListener("touchstart", function (e) {
      if (e.touches.length != 1) return;

      ministrat.is_dragging = true;
      ministrat.main.map.start_x = e.touches[0].clientX;
      ministrat.main.map.start_y = e.touches[0].clientY;
    });

    map_el.addEventListener("touchmove", function (e) {
      if (!ministrat.is_dragging || e.touches.length != 1) return;
      
      var touch = e.touches[0];

      var delta_x = touch.clientX - ministrat.main.map.start_x;
      var delta_y = touch.clientY - ministrat.main.map.start_y;

      ministrat.main.map.x += delta_x;
      ministrat.main.map.y += delta_y;
      ministrat.main.map.start_x = touch.clientX;
      ministrat.main.map.start_y = touch.clientY;

      updateMapCoords();
      e.preventDefault();
    }, { passive: false });

    map_el.addEventListener("touchend", function (e) {
      ministrat.is_dragging = false;
    });
  }
}