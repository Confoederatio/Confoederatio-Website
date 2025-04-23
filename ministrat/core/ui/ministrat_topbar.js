//Initialise functions
{
  function drawClock (arg0_hour) {
    //Convert from parameters
    var hour = parseInt(arg0_hour);

    //Declare local instance variables
    var canvas = document.querySelector(ministrat.config.topbar_elements.clock_canvas_selector);
    var ctx = canvas.getContext("2d");

    var clock_outline_width = 2.75;

    //Clear rect first
    ctx.clearRect(0, 0, canvas.width, canvas.height);

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
    var hour_angle = (hour*Math.PI*2)/24;
    var hour_hand_length = 20.5;
    var rotated_angle = -hour_angle + Math.PI/2;

    ctx.beginPath();
    ctx.moveTo(32 - clock_outline_width/2, 32); //Start point is at the centre
    ctx.lineTo(
      32 - clock_outline_width/2 + hour_hand_length*Math.cos(rotated_angle), 
      32 - hour_hand_length*Math.sin(rotated_angle)
    );
    ctx.stroke();
  }

  function drawMinistratDate () {
    //Declare local instance variables
    var hour_string = ministrat.gamestate.date.hour.toString().padStart(2, "0");
    var ministrat_date_el = document.querySelector(ministrat.config.topbar_elements.date_canvas_selector);
    var month_string = months[ministrat.gamestate.date.month - 1];

    //Draw date
    ministrat_date_el.innerHTML = `${ministrat.gamestate.date.day}. ${month_string} ${ministrat.gamestate.date.year}, ${hour_string}:00`;
  }

  function initialiseMinistratDate () {
    //Initialise date framework first
    initDateFramework();

    //Draw initial clock
    drawClock(ministrat.gamestate.date.hour);

    ministrat.date_handler_loop = setInterval(function () {
      ministrat.gamestate.time_since_tick++;
      
      var current_days_in_month = days_in_months[ministrat.gamestate.date.month - 1];
      var has_tick = (ministrat.gamestate.time_since_tick % ministrat.main.game_speed == 0);

      //Handle time logic
      if (has_tick) {
        //Leap year handling
        if (ministrat.gamestate.date.month == 2)
          if (isLeapYear(ministrat.gamestate.date.year))
            current_days_in_month = 29;

        //Increment hour
        ministrat.gamestate.date.hour++;

        if (ministrat.gamestate.date.hour >= 24) {
          ministrat.gamestate.date.hour = 0;
          ministrat.gamestate.date.day++;
        }
        if (ministrat.gamestate.date.day > current_days_in_month) {
          ministrat.gamestate.date.day = 1;
          ministrat.gamestate.date.month++;
        }
        if (ministrat.gamestate.date.month > 12) {
          ministrat.gamestate.date.month = 1;
          ministrat.gamestate.date.year++;
        }

        //Draw clock
        drawClock(ministrat.gamestate.date.hour);
        drawMinistratDate();

        ministrat.gamestate.time_since_tick = 0;
      }
    }, 1000/3);
  }

  function loadMinistratTopbar () {
    initialiseMinistratDate();
  }
}
