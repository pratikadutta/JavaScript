//Primitive 
//7 types - number,string,boolean,null,undefined,bigint,symbol

//Non-primitive - object, array, function

let person = {
    firstName: "Jane",
    lastName: "Doe"
};

let colors = ["red", "green", "blue"];

function greet() {
    console.log("Hello!");
}

// If val is undefined, return "undefined".
// If val is null, return "object".
// If val is a String, return "string".
// If val is a Symbol, return "symbol".
// If val is a Boolean, return "boolean".
// If val is a Number, return "number".
// If val is a BigInt, return "bigint".