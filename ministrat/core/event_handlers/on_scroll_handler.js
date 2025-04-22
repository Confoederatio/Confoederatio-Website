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
  }

  function ministratMapScrollHandler (e) {
    if (ministrat.game_open) {
      document.getElementById("ministrat-anchor").scrollIntoView({
        behavior: "instant"
      });

      return true;
    }
  }
}