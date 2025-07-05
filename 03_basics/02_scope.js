//global scope
// var c = 300
var a =300
//curly braces are scope
if (true) {
   //local scope 
  let a = 10;
  const b = 20;
  var c = 30; //if variable declaration not define - var
  console.log("Inner: ",a);
  
}
  console.log("Outer: ",a);

// console.log(a);
// console.log(b);
console.log(c);

//scope is different in node and browser