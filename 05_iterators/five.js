//for-each loop - used for array

const coding = ["js","java","c++","ruby"]

// coding.forEach(function(element){
//     console.log(element);
// })

// coding.forEach(element => {
//     console.log(element);
// });

// function printME(item){
//     console.log(item);
// }
//coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
]
myCoding.forEach((item)=>{
    console.log(item.languageName);
})