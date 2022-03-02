// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celcius",
    value: prompt("Degree Celcius: "),
  };
  console.log(measurement.value);
  console.dir(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};

//  A) Identify the bug
console.log(measureKelvin());
