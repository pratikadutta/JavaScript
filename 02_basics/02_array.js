const marvel_heros = ["thor","Ironam","Spiderman"]
const dc_heros = ["supperman","flash","batman"]

// marvel_heros.push(dc_heros) 

// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

const allHeros = marvel_heros.concat(dc_heros) //combine two or more array and return one array
// console.log(marvel_heros);

const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros)

const another_arrray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_arrray.flat(Infinity)
console.log(real_another_array)


console.log( Array.isArray("Hitesh")) //false
console.log( Array.from("Hitesh")) //returns array
console.log( Array.from({name:"Hitesh"})) //[] //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)) //[ 100, 200, 300 ]