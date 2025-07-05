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

function one(){
  const username = "Pratika"
  function two() {
    const website = "youtube"
    console.log(username);
  }
  // console.log(website);
  
  two()
}
// one()

if (true) {
  const username = "Pratika"
  if(username==="Pratika"){
    const website = " youtube"
    console.log(username + website);
    
  }
  // console.log(website);
}

// console.log(username);

//---------------------------interesting -------------------------
console.log(addOne(5));
function addOne(num) {
  return num++
}




addTwo(5) //error 
const addTwo = function(num){
  return num + b2
}
