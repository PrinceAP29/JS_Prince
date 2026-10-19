const marvel_heros = ["Thor","IronMan","Spiderman"]
const dc = ["superman","flash","batman"]

// marvel_heros.push(dc)                        push to original array
// console.log(marvel_heros);
// console.log(marvel_heros[3][2])

// const newArr = marvel_heros.concat(dc);   // this concat two array and made a new array but do not change the original
// console.log(newArr);


const all_new_heros = [...marvel_heros,...dc]
// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,8,[9,10,[11,12,13]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Prince"))
console.log(Array.from("Prince"))

console.log(Array.from({name: "Prince"}))               // interesting

let score1 = 100;
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))

