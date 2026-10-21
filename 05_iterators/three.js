const arr = [1,2,3,4,5]

for (const element of arr) {
    // console.log(element)
}

const greeting = "Hello World"
for (const greet of greeting) {
    // console.log(greet)
}

// map

// const map = new Map()
// map.set('IN','India')
// map.set('IN','India')
// map.set('USA','United State Of America')
// map.set('FR','France')

// for (const element of map) {
//     console.log(element)
// }
const map = new Map()
map.set('IN','India')
map.set('IN','India')
map.set('USA','United State Of America')
map.set('FR','France')

for (const [key,value] of map) {
    // console.log(key,'->',value)
}

const myObject = {
    game1: 'NFS',
    game2: 'spiderman'
}

for (const [key,value] of myObject) {
    console.log(key,'->',value);
    
}