// primitive

// 7 type : string , number , Boolean , null , undefined, symbol, bigint


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId)

const bigNumber = 32655546546548489n


// reference (non primitve)

// Array , Object, Function

const heros = ["shakitman", "naagraj", "doga"]
let myObj = {
    name:"prince",
    age: 18,
}

const myFunction  = function(){
    console.log("Hellow world")
}

console.log(typeof outsideTemp)
console.log(typeof myFunction)
