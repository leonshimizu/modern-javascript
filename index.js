console.log("Hello from JS");

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

const darkmode = new Darkmode();
darkmode.toggle();
console.log(darkmode.isActivated()); // will return true