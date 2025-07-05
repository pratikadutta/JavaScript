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
    if(!username) //if(username === undefined)
        {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage());


function calculateCartPrice (...num1)//rest-operator
{
    return num1 //[ 200, 400, 500 ]
}
console.log(calculateCartPrice(200,400,500));

function calculateCartPrice1 (val1,val2,...num1)//rest-operator
{
    return num1 //[ 500, 2000 ]
}
console.log(calculateCartPrice1(200,400,500,2000));

const user = {
    username :"pratika",
    price: 199
}

function handleObject (anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.calculateCartPrice}`);
}
// handleObject(user)
handleObject({
    username:"sam",
    price:399
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
