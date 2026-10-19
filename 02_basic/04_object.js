// two way to define a object 
// 1. const tinderUser = {}                this is non singleton
// 2. const tinderUser = new Object()      this is singleton object


const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Prince",
            lastname: "Kumar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)   // we use {} because it act as a souce in which other are acting as a target if not condier {} then obj1 will become source and rest become target

const obj3 = {...obj1,...obj2}
// console.log(obj3);

const users = [
    {
        id: "1",
        email: "abc@gamil.com"
    },
    {
        id: "3",
        email: "abefgc@gamil.com"
    },
    {
        id: "3",
        email: "abcefghij@gamil.com"
    },
    

]
// console.log(users[1].email)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course = {
    coursename: "js in hindi",
    price: "999",
    courseinstructor: "hitesh"
}
const {courseinstructor: instructor} = course

// console.log(courseinstructor)   int this case courseinstructor has become instructor so we can not use console.log(courseinstructor)
console.log(instructor)

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }
