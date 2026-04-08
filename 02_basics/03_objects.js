//Singleton- created from constructor
//Object.create

//object literals is another way to create objects
const mySym = Symbol("key1")
const jsUser = {
    name:"Yash",
    age:22,
    [mySym]:"myKey1",
    location: "Jaipur",
    email:"ykhare@google.com",
    isLoggedIn: false,
    lasLoginDays:["Monday","Tuesday"]
}

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser[mySym])

jsUser.email = "yash@chatGPT.com"
//Object.freeze(jsUser)
jsUser.email = "yash@microsoft.com"
console.log(jsUser)

jsUser.greeting = function() {
    console.log("hello from object")
}

jsUser.greeting()

jsUser.greeting2 = function() {
    console.log(`Hello JS User, ${this.name}`)
}

jsUser.greeting2()