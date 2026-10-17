const name = "Prince"
const repoCount = 50

// console.log(name + repoCount+ "value");

console.log("Hello my name is ${name} and my repo count is ${repoCount}")

const gameName = new String('Prince-Kumar')

console.log(gameName[3]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('n'))

const newString = gameName.substring(0,3)
console.log(newString)

const anotherString = gameName.slice(-8,7)
console.log(anotherString)

const nerStringOne = "   Prince   "
console.log(nerStringOne)
console.log(nerStringOne.trim())

const url = "https://prince.com/porince%20kumar"

console.log(url.replace('%20','-'))

console.log(url.includes('kumar'))

console.log(gameName.split('-'))


// revise all function from mdn
