const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc+currval
// },3)

const myTotal = myNums.reduce((acc,currval) => {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc+currval
},3)

const shoppingCart = [
    {
        itemName: 'js course',
        price:499
    },
    {
        itemName: 'java course',
        price:299
    },
    {
        itemName: 'py course',
        price:599
    },
    {
        itemName: 'data science course',
        price:1299
    },
]

const total = shoppingCart.reduce((acc,item)=>{
    console.log(`acc: ${acc} and price: ${item.price}`);
    return acc+item.price
},0)

console.log(total);
