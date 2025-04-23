//Initialise functions
{
  function drawClock (arg0_hour) {
    //Convert from parameters
    var hour = parseInt(arg0_hour);
  }

  function initialiseClock () {
    //Declare local instance variables
    var canvas = document.querySelector(ministrat.config.topbar_elements.clock_canvas_selector);
    var ctx = canvas.getContext("2d");

    var clock_outline_width = 2.75;

    //Draw light grey circle
    ctx.beginPath();
    ctx.arc(32 - clock_outline_width/2, 32 - clock_outline_width/2, 32 - clock_outline_width, 0, 2*Math.PI);
    ctx.lineWidth = clock_outline_width;
    ctx.strokeStyle = ministrat.config.ui.ministrat_primary_ui_colour;
    ctx.stroke();

    //Draw hour marks
    for (var i = 0; i < 12; i++) {
      var local_angle = (i*Math.PI*2)/12;
      var local_radius = 24;

      var local_dot_x = 32 - clock_outline_width/2 + local_radius*Math.cos(local_angle - Math.PI/2);
      var local_dot_y = 32 - clock_outline_width/2 + local_radius*Math.sin(local_angle - Math.PI/2);

      ctx.beginPath();
      ctx.arc(local_dot_x, local_dot_y, 1, 0, 2*Math.PI);
      ctx.fillStyle = ministrat.config.ui.ministrat_primary_ui_colour;
      ctx.fill();
    }

    //Draw hour hand
    var hour_hand_length = 20.5;

    ctx.beginPath();
    ctx.moveTo(32 - clock_outline_width/2, 32); //Start point is at the centre
    ctx.lineTo(32 - clock_outline_width/2, 32 - hour_hand_length);
    ctx.stroke();
  }

  function loadMinistratTopbar () {
    initialiseClock();
  }
}
