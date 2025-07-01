"use strict";//treat all js code as newer version

//alert("hello") //we are using nodejs, not browser

let name = "hitesh"
let age = 18
let isLoggesIn = false

//number => 2 to power 53
//bigint
//string => ""
//boolean => true/false
//null => standalone value
//undefiner =>
//symbol => unique

//object

console.log(typeof "hitesh")
console.log(typeof null) //object
console.log(typeof undefined) //undefined
console.log(typeof age)


//Stack(Primitive), Heap(Non-Primitive)

let myYoutubeName = "pratikadutta"

let anotherName = myYoutubeName
anotherName = "thepratikadutta"

console.log(myYoutubeName) //pratikadutta
console.log(anotherName) //thepratikadutta

let userOne = {
    email:"user@gmail.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "pratika@gmail.com"

console.log(userOne.email) //pratika@gmail.com
console.log(userTwo.email) //pratika@gmail.com