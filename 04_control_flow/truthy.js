const userEmail = []

if(userEmail){
    console.log("got user email");
}
else{
    console.log("Don't have user email"); 
}

//falsy value
//false, 0, -0, BigInt-0n, null, undefined, NaN

//truthy value
//"0", 'false', " ", [], {}, function(){}

// if (userEmail.length===0) {
//     console.log("Array is empty");
    
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty"); 
}

//Nullish Coalescing Operator(??) : null undefined

let val1;
// val1 = 5??10

// val1 = null??10 //10
// val1 = undefined??10 


console.log(val1);

//Ternary Operator

//condition ? true : false