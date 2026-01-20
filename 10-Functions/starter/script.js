'use strict';

// function greet(greeting) {
//     function innerGreet(name) {
//         return `${greeting}, ${name}!`;
//     }
//   return innerGreet;
// }

const greet = (greeting) => (name) => `${greeting}, ${name}!`;


console.log(greet('Hello')('Alice')); // Output: Hello, Alice!

const sayHi = greet('Hi');
console.log(sayHi('Bob')); // Output: Hi, Bob!
console.log(sayHi('Charlie')); // Output: Hi, Charlie!