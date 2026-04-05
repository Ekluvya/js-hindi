const accountId = 144553
let accountEmail = "yash@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 //not allowed
accountEmail = "hc@hc.com"
accountPassword = "56789"
accountCity = "Bangalore"

console.log(accountId)
console.log(accountPassword)
console.log(accountCity)

/*
Prefer not to use var because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountCity, accountPassword, accountState])