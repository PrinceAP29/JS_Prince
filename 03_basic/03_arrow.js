const user = {
    username: "Prince",
    price: 999,

    welcomeMessage: function()  {
        console.log(`${this.username}, welcome to website`)
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     console.log(this);
    
// }
// chai()

// const chai = function(){
//     let username = "prince"
//     console.log(this.username)
// }
// chai()

// const chai = () => {
//     let username = "prince"
//     console.log(this)
// }
// chai()

// const addTwo = (num1,num2) => {
//     return num1+num2
// }
// console.log(addTwo(3,5));

// const addTwo = (num1,num2) => num1+num2    // implict type arrow function
    // const addTwo = (num1,num2) => (num1+num2)

     const addTwo = (num1,num2) =>( {username: "prince"})

console.log(addTwo(3,5));

// const myArray = [3,4,5,6,7]
// myArray.forEach(( => {}))

    


