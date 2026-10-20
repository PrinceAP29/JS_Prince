// if

const isUserLoggedIn = true
const temperature = 41

// if(temperature<50){
//     console.log("temperature less than 50");
    
// }
// console.log("Temperature greater than 50")

// const score = 200

// if(score>100){
//     const power = "fly"
//     console.log(`user power: ${power}`);
    
// }
// console.log(`user power:${power}`)

// const balance = 1000
// if(balance>500) console.log("test"),console.log("test2")

const balance = 1000
// if (balance<500) {
//     console.log("less than")
// }
// else if(balance<750){
//     console.log("less than 750")
// }
// else{
//     console.log("less than 1200")
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("allowed to buy cources")
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in")
}





