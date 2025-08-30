'use strict';

let x = 0;
let y = 0;

let arr = [() => x, () => y];

const funct = function () {
  x = 10;
  y = 100;
};

funct();

console.log(arr[1]());
