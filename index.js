console.log("Hello from JS");

var moment = require('moment');

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

console.log(moment().subtract(10, 'days').calendar());

// const darkmode = new Darkmode();
// darkmode.toggle();
// console.log(darkmode.isActivated()); // will return true

var name = "Bob";

console.log(`Hello World - from ${name}`);

console.log(`Hello ${name}, right now it is ${moment().format('MMMM Do YYYY, h:mm:ss a')}`);

console.log("TEST");

name = "Bob";
console.log("Hello World - from ".concat(name));
console.log("Hello ".concat(name, ", right now it is ").concat(moment().format('MMMM Do YYYY, h:mm:ss a')));