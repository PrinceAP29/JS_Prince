const account_Id = 14453
let accountEmail = "princd123@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// account_Id = 2  not allowed
console.log(account_Id)

accountEmail = "abcd@gmail.com"
accountPassword = "2121547"
accountCity = "rachi"


/*
perfer not to use var
beacuse of issue in block scope and functional scope
*/

console.table([accountEmail, accountPassword, accountCity, accountState])
