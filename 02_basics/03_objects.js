//literal declaration-singleton, constructor-not singleton
// Object.create - constructor 

//object literals

const mySym = Symbol("key1")

const jsUser = {
    name:"Pratika",
    "full name": "Pratika Dutta",
    [mySym]:"mykey1", //symbol declaration
    age:23,
    location:"Kolkata",
    email:"pratika@gmail.com",
    isLoggesIn: false,
    lastLoginDays: ['Monday','Saturday']
}

console.log((jsUser.email));
console.log((jsUser["email"]));

console.log(jsUser["full name"])
console.log(jsUser[mySym]);

jsUser.email = "thepratika@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "pratika@google.com"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello Js User");  
}
jsUser.greetingTwo = function(){
    console.log(`Hello Js User ${this.name}`);  
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())


