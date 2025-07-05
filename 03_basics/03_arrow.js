const user = {
    username: "Pratika",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`) 
        console.log(this);
            
    }
}

user.welcomeMessage() //Pratika, welcome to website
// {
//   username: 'Pratika',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }
user.username = "sam"
user.welcomeMessage() //sam, welcome to website
// {
//   username: 'sam',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }

console.log(this); //{} - empty

function chai(){
    console.log(this);
}
chai()

function chai(){
    let username = "Pratika"
    console.log(this.username); //undefined
}
chai()

const chai = function(){
    let username = "Pratika"
    console.log(this.username); //undefined
}
chai()

const chai = () => {
    let username = "Pratika"
    console.log(this.username); //undefined
}
chai()

 
//explicit return
// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3,4));


//const addTwo = (num1,num2) => (num1 + num2) //implicit return
const addTwo = (num1,num2) => ({username:"hitesh"})
console.log(addTwo(3,4));

//when we used curly braces we need to add return unless not need

