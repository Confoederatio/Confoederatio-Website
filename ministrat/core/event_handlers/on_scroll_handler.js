//Initialise functions
{
  function ministratMapScrollHandler (e) {
    if (ministrat.game_open) {
      document.getElementById("ministrat-anchor").scrollIntoView({
        behavior: "instant"
      });

      return true;
    }
  }
}