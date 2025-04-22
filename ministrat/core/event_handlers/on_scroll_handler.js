//Initialise functions
{
  function loadMinistratScrollHandler () {
    ministrat.scroll_handler_loop = setInterval(function(){
      if (ministrat.game_open) {
        document.getElementById("ministrat-anchor").scrollIntoView({
          behavior: "instant"
        });
      }
    }, 100);
    
    ministrat.main.map_elements.main_map_el.onwheel = function (e) {
      ministratMapWheelHandler(e);
    };
  }

  function ministratMapScrollHandler (e) {
    if (ministrat.ignore_scroll) {
      ministrat.ignore_scroll = false;
      return;
    }

    if (ministrat.game_open) {
      //Make sure Ministrat is non-scrollable
      document.getElementById("ministrat-anchor").scrollIntoView({
        behavior: "instant"
      });

      return true;
    }
  }

  function ministratMapWheelHandler (e) {
    //Declare local reference variables
    var screen_x = e.clientX;
    var screen_y = e.clientY;
    const zoom_before = ministrat.main.map.zoom;

    var map_x = (screen_x - ministrat.main.map.x)/zoom_before;
    var map_y = (screen_y - ministrat.main.map.y)/zoom_before;

    //Apply zoom change
    if (e.deltaY > 0) {
      if (ministrat.main.map.zoom > 1)
        ministrat.main.map.zoom *= 0.9;
    } else {
      if (ministrat.main.map.zoom < 25)
        ministrat.main.map.zoom *= 1.1;
    }

    const zoom_after = ministrat.main.map.zoom;

    //Update pan to keep cursor point anchored
    ministrat.main.map.x = screen_x - map_x*zoom_after;
    ministrat.main.map.y = screen_y - map_y*zoom_after;

    updateMapCoords();
  }
}