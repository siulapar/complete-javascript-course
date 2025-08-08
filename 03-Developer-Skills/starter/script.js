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

// const arr = [17, 21, 23];
// const arr2 = [12, 5, -5, 0, 4];
// let deg = String.fromCharCode(176);

// const getMaxTemp = function (arr) {
//   let maxTemp;

//   for (const temp of arr) {
//     if (maxTemp) {
//       if (temp > maxTemp) {
//         maxTemp = temp;
//       }
//     } else {
//       maxTemp = temp;
//     }
//   }

//   return maxTemp;
// };

// const printForecast = (arr) => {
//   // for (const temp of arr) {
//   //   console.log(`${temp}${deg}C`);
//   // }

//   let i = 0;
//   let msg = "...";
//   let maxTemp;
//   while (i < arr.length) {
//     maxTemp = getMaxTemp(arr.slice(0, i + 1));
//     msg += ` ${maxTemp}${deg}C in ${i + 1} days ...`;
//     i += 1;
//   }

//   return msg;
// };

// console.log(printForecast(arr2));

const calWorkHours = function (arr) {
  let sum = 0;
  let maxHr = 0;
  let maxDay = 0;
  let numDayWork = 0;
  let i = 1;
  for (const hr of arr) {
    sum += hr;

    if (hr > 0) numDayWork += 1;

    if (hr > maxHr) {
      maxHr = hr;
      maxDay = i;
    }

    i += 1;
  }

  let fullTime = false;
  if (sum >= 35.0) fullTime = true;

  console.log("Total hours worked =", sum);

  const avgDailyHours = sum / arr.length;
  console.log("Average daily hours =", avgDailyHours);
  console.log("The day with the most hours worked =", maxHr, "Day =", maxDay);
  console.log(`Number of days worked =`, numDayWork);
  console.log("Week was full time(35 hours or more)?", fullTime);
};

const testData = [7.5, 8, 6.5, 0, 8.5, 4, 0];

console.log(testData);
calWorkHours(testData);
