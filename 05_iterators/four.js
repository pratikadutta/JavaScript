//for-in loop
const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js","rb","cpp"]

for (const key in programming) {
    console.log(key); // 0, 1 ,2
    console.log(programming[key]);//prints value
    
    
}
const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")


for (const key in map) {
    console.log(key);    // shows nothing, but map is not iterable
}