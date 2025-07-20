// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",
//     value: parseInt(prompt("Degree celsius:")),
//   };
//   //   debugger;
//   console.table(measurement);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// console.log(measureKelvin());

const arr = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];
let deg = String.fromCharCode(176);

const getMaxTemp = function (arr) {
  let maxTemp;

  for (const temp of arr) {
    if (maxTemp) {
      if (temp > maxTemp) {
        maxTemp = temp;
      }
    } else {
      maxTemp = temp;
    }
  }

  return maxTemp;
};

const printForecast = (arr) => {
  // for (const temp of arr) {
  //   console.log(`${temp}${deg}C`);
  // }

  let i = 0;
  let msg = "...";
  let maxTemp;
  while (i < arr.length) {
    maxTemp = getMaxTemp(arr.slice(0, i + 1));
    msg += ` ${maxTemp}${deg}C in ${i + 1} days ...`;
    i += 1;
  }

  return msg;
};

console.log(printForecast(arr2));
