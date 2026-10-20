// function

function sayMyName(){
    console.log("P")
    console.log("R")
    console.log("I")
    console.log("N")
    console.log("C")
    console.log("E")
}

// sayMyName()    // sayMyName is reference and sayMyName() is executation


function addTwoNumbers(number1,number2){
//    let result = number1 + number2;
//    return result;
        return number1+number2;
} 
// function addTwoNumbers(number1,number2){
//    console.log(number1 + number2);
// }                                     // here number1 and number2 is parameter and 3and4 is argument
const result = addTwoNumbers(3,4)
// addTwoNumbers(3,"4")
// addTwoNumbers(3,"a")

// console.log("Result",result)

function loginUserMessage(username="sam"){
    if(!username){
        console.log("Please enter a username");
        return
        
    }
        return `${username} just logged in`
}

// console.log(loginUserMessage());


// console.log((loginUserMessage("Prince")));

function calculateCartPrice(val1,val2,...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,600,800,1000))

// const user = {
//     username: "prince",
//     price: 199
// }
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price os ${anyobject.price} `)
}

// handleObject(user)

handleObject({
    username: "sam",
    price: 199
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))