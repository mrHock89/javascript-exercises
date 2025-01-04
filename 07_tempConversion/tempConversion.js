const convertToCelsius = function (tempf) {
  temptoCelsius = Math.round((((tempf - 32) * 5) / 9) * 10) / 10;
  return temptoCelsius;
};

const convertToFahrenheit = function (tempc) {
  temptoFahrenheit = Math.round(((9 * tempc) / 5 + 32) * 10) / 10;
  return temptoFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
