const marvel_heroes = ["thor","ironman","spiderman"]
const dc_heroes = ["superman","flash","batman"]

//marvel_heroes.push(dc_heroes)
//console.log(marvel_heroes) //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
const concat_heroes = marvel_heroes.concat(dc_heroes)
console.log(concat_heroes)

const all_new_heroes = [...dc_heroes,...marvel_heroes] //spread operator
console.log(all_new_heroes)

const another_array = [1,2,3,4,[5,6,7],8,[9,10,[11,12]]]
const my_real_another =  another_array.flat(Infinity)
console.log(my_real_another)

console.log(Array.from("Yash"))

let score1 = 100;
let score2 = 300;
let score3 = 400;

console.log(Array.of(score1,score2,score3))