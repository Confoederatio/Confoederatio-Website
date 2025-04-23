//Initialise functions
{
  function ministratMainMapClickHandler (e) {
    //Declare local reference variables
    var map_elements_obj = ministrat.main.map_elements;

    if (!map_elements_obj.main_map_el.getAttribute("class").includes("expanded"))
      loadMinistrat();
  }

  function ministratMapClickHandler (e) {
    
  }
}