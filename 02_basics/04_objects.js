//Singleton - using constructor

// const tinderUser = new Object()

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Pratika";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
  email: "pratika@gmail.com",
  userfullname: {
    firstname: "Pratika",
    lastname: "Dutta",
  },
};

// console.log(regularUser.userfullname?.firstname)

const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "c",
  4: "d",
};

// const obj3 = {obj1,obj2}

// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email:"pratika@gmail.com"
    }
]

// users[0].email

// console.log(Object.keys(tinderUser)) //[ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)) //[ '123abc', 'Pratika', false ]
// console.log(Object.entries(tinderUser)) //[ [ 'id', '123abc' ], [ 'name', 'Pratika' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
  coursename : "js",
  price:"100",
  courseInstructor:"Pratika"
}

//Object de-structure
const {courseInstructor:instructor} = course

console.log(instructor);

//json
// {
//   "name":"Pratika",
//   "coursename":"js",
//   "price":"free"
// }
//response as array
// [
//   {},
//   {},
//   {}
// ]

