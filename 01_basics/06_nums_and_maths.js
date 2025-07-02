const score = 400;
console.log(score);

//explicit declaration
const balance = new Number(100);
console.log(balance);
console.log(balance.toFixed(2)); //100.00

console.log(balance.toString());
console.log(typeof balance.toString());
console.log(balance.toString().length);

const otherNumber = 123.8966;

console.log(otherNumber.toPrecision(4));

const hundreds = 1000000;
//console.log(hundreds.toLocaleString())//1,000,000
//console.log(hundreds.toLocaleString('en-In'))//10,00,000

//------------------------Maths--------------------------

console.log(Math) //Object [Math] {}

console.log(Math.abs(-52)); //52
console.log(Math.round(4.6)); //5
console.log(Math.ceil(4.2)); //5
console.log(Math.floor(4.6)); //4

console.log(Math.min(4, 3, 6, 8)); //3
console.log(Math.max(4, 3, 6, 8)); //8

console.log(Math.random());
console.log(Math.floor(Math.random() * 10 + 1)); //1-10

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
