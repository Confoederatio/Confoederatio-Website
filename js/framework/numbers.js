//Numbers export functions
{
  function randomNumber (arg0_min, arg1_max) {
    //Convert from parameters
    var min = arg0_min;
    var max = arg1_max;

    //Return statement
    return Math.floor(Math.random()*max)+min;
  }
}
