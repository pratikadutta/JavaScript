//array

const myArray = [0,1,2,3,4,5]
const myHerod = ["shaktiman","naagraj"]

const myArray2 = new Array(1,2,3,4)



//JS array copy operation create shallow copy(reference)


// myArray.push(6)
// myArray.push(7)
// myArray.pop()

// myArray.unshift(9) //insert at the start of an array
// myArray.shift() //delete from the start

console.log(myArray.includes(9)); //false
console.log(myArray.indexOf(9)); //-1
console.log(myArray.indexOf(5)); //5

const newArry = myArray.join()
console.log(newArry) //join strings also convert into string

//slice,splice

console.log("A ",myArray)
const myn1 = myArray.slice(1,3)

console.log(myn1)
console.log("B ",myArray)

const myn2 = myArray.splice(1,3)

console.log(myn2)
console.log("C ",myArray)
