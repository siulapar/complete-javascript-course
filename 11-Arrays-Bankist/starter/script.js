'use strict';

const user = 'Steven Thomas Williams';
const account = user
  .toLowerCase()
  .split(' ')
  .map(name => name[0])
  .join('');

console.log(account); // Output: stw