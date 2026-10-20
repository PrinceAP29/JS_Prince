const userEmail = ""

if (userEmail) {
    console.log("have user email")
}else{
    console.log("do not have a email")
}


// false values 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0","false"," ",[],{},function(){}

if(userEmail.length === 0){
    console.log("Array is empety");
}


const emptyObj = {}

if (Object.keys(emptyObj).length===0) {
    console.log("Object is empty")
}

// Nullish Coalescing Operator(??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 5
val1 = undefined ?? 15

console.log(val1);

// Terninary Operator

// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("Less than 80"): console.log("Greater than 80")
