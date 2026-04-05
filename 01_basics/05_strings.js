const name="hitesh"
const repoCount = 50
//console.log(name+repoCount+" Value") //primitive way of writing

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String("Yash-yk-com")

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.indexOf('yk'))
console.log(gameName.charAt(2))
const newString = gameName.substring(0,5)
const newString2 = gameName.slice(-10,8)

console.log(newString)
console.log(newString2)

const url = "https://www.yashkhare.com//yk%20khare"

console.log(url.replace('%20','-'))
console.log(url.includes('%20'))

const words = gameName.split('-')

console.log(words)