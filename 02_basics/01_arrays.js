//array

const array = [1,2,3,4,true,'Yash'] //Valid
const fruits = ['Apple','Banana','Kiwi']
const myArr = new Array(1,2,3,4)
//Arrays are resizabale
//Array index cannnot be accessed through arbitrary strings

console.log(myArr[0])
//Array copying creates shallow copies-same reference points
myArr.push(99)
myArr.push(89) //[ 1, 2, 3, 4, 99, 89 ]
myArr.pop() //removes last element
myArr.unshift(9) //adds in front
myArr.shift() //removes from front
console.log(myArr)

console.log(myArr.includes(9))
console.log(myArr.indexOf(9))
console.log(myArr.indexOf(99))

const strArr = myArr.join('-')
console.log(strArr)

console.log("A ",myArr)
const myn1 = myArr.slice(1,3)
console.log(myn1)
console.log("B ",myArr) //No change in array by using slice

const myArr2 = myArr.splice(1,3)
console.log("C ", myArr) //array changed
console.log("Spliced array ",myArr2)