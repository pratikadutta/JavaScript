const coding = ["js", "ruby", "java", "python", "cpp"];

// const values = coding.forEach((item)=> {
//     console.log(item);
//     return item
// })
// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) =>{
//      return num > 4});

const newNums = []

myNums.forEach(num=>{
    if(num>4) {
        newNums.push(num)
    }
})

console.log(newNums);

const books = [
    {
        title: 'Books One', genre: 'Bengali', publish: 1980, edition: 1956
    },
    {
        title: 'Books Two', genre: 'English', publish: 1980, edition: 1956
    },
    {
        title: 'Books Three', genre: 'Hindi', publish: 1980, edition: 1956
    },
    {
        title: 'Books Four', genre: 'Bengali', publish: 1980, edition: 1956
    },
    {
        title: 'Books Five', genre: 'Bengali', publish: 1980, edition: 1956
    },
    {
        title: 'Books Six', genre: 'Bengali', publish: 1980, edition: 1956
    },
]

const userBooks = books.filter((book)=> book.genre === 'Bengali')

console.log(userBooks);
