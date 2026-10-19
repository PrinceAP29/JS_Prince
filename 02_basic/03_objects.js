// singleton 
// Object.create

const { jsx } = require("react/jsx-runtime");




// object literal

const mysym = Symbol("Key1")
const JsUser = {
    name: "Prince",
    "full name":"Prince kumar",
    [mysym]:"Mykey1",
    location: "Jaipur",
    email: "prince@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mysym]);

JsUser.email = "plinadn@dksa.com"
console.log(JsUser);

// Object.freeze(JsUser)
JsUser.email = "plinadn@dska.com"

console.log(JsUser)


JsUser.greeting = function(){
    console.log("hello js user")
}

JsUser.greetingtwo = function(){
    console.log('Hello js user, ${this.name}');
}
console.log(JsUser.greeting)
console.log(JsUser.greetingtwo())


