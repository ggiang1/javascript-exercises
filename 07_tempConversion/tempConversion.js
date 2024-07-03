const convertToCelsius = function(temperature) {
  var celsius = (temperature - 32) * (5/9);
  var celsius = Math.round(celsius * 10) / 10;

  return celsius;
};

const convertToFahrenheit = function(temperature) {
  var fahrenheit = (temperature * 9/5) + 32;
  var fahrenheit = Math.round(fahrenheit * 10) / 10;

  return fahrenheit;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
