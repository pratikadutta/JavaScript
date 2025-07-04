function sayMyName(){
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("T");
    console.log("I");
    console.log("K");
    console.log("A");
}
// sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);    
// }
// const result = addTwoNumbers(5,6);

function addTwoNumbers(number1,number2){
    return(number1+number2);    
}
const result = addTwoNumbers(5,6);

console.log("Result:",result);

function loginUserMessage(username = "Sam"){
    if(!username) //if(username ===undefined)
        {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage());

