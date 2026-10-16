let score = "33abc"

console.log(typeof score)

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

/*
"33" => 33
"33abc" => NaN
"null" => 0
"undefined" => NaN
"true" = 1
"false" => 0
*/
let isLoggedIn = 0
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

/*
1 => true
0 => false
"" => false
"abc" => true
*/

let randomNumber = 33

let stringNumber = String(randomNumber)
console.log(stringNumber)
console.log(typeof stringNumber)
