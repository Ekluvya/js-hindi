//  Primitive - call by value

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123') //both are different
console.log(id === anotherId)
const bigNumber = 34567890876543535n

// Reference (non primitive)
// Arrays, Objects, Functions
const heroes = ["shaktiman","naagraj","doga"]
const user = {
    name:"hitesh",
    age:22,
    gender: "male"
}

const myFunction = function() {
    console.log("Hello World")
}

console.log(typeof myFunction)

// https://262.ecma-international.org/5.1/#sec-11.4.3