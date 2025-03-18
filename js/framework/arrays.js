//Global export functions for arrays
{
  window.randomElement = function (arg0_array) {
    //Convert from parameters
    var array = arg0_array;

    //Return statement
    return array[Math.floor(Math.random()*array.length)];
  };
  window.removeElement = function (arg0_array, arg1_element) {
    //Convert from parameters
    var array =  arg0_array;
    var element_content = arg1_element;

    for (var i = 0; i < array.length; i++) if (array[i] == element_content) array.splice(i, 1);

    //Return statement
    return array;
  }
  window.sumArray = function (arg0_array) {
    //Convert from parameters
    var array = arg0_array;

    //Declare instance variables/processing
    var sum_of_array = 0;
    for (var i = 0; i < array.length; i++) sum_of_array += array[i];

    //Return statement
    return sum_of_array;
  };
  window.unique = function (arg0_array) {
    //Convert from parameters
    var array = arg0_array;

    var objects = [];
    var primitives = {
      boolean: {},
      number: {},
      string: {},
    };

    return array.filter(function (item) {
        var type = typeof item;
        if (type in primitives) {
          return primitives[type].hasOwnProperty(item) ? false : (primitives[type][item] = true);
        } else {
          return objects.indexOf(item) >= 0 ? false : objects.push(item);
        }
    });
  };
}
