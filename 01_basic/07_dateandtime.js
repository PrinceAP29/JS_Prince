//Dates 

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toISOString())
console.log(myDate.toLocaleDateString())
console.log(typeof myDate)

let myCreatedDate = new Date(2026, 5, 15)
let createdate = new Date("2023-01-14")
let seconddate = new Date("1-05-2026")
console.log(myCreatedDate.toDateString())
console.log(createdate.toDateString())
console.log(seconddate.toDateString())


let myTimeStamp = Date.now()
console.log(myTimeStamp)

console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))


let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())

// '${newDate.getDay()}  and the time '

newDate.toLocaleDateString('default',{
    weekday:"long",
    // timeZone:
})