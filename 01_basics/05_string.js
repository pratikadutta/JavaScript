const name="Pratika"
const repoCount = 50

//console.log(name+repoCount+"Value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('Pratika-Dutta')

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'))

const newString = gameName.substring(0,7)
console.log(newString)
// console.log(gameName)

const anotherString = gameName.slice(-12,4)
console.log(anotherString)

const newStringOne = "   hitesh   "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://pratika%20dutta"

console.log(url.replace('$20','-'))

console.log(url.includes('sundar'));

console.log(gameName.split('-')[0])
 
 