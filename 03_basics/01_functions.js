function sayMyName(name) {
    console.log("My name is " + name);
}

//sayMyName("John");

function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

const result = addTwoNumbers(5, 10);
//console.log(result);

function nloginUserMessage(username, password="12345") {
    if (!username) {
        console.log("Username is required");
        return;
    }
    if (!password) {
        console.log("Password is required");
        return;
    }
    console.log("You are logged in");
}

nloginUserMessage("John", "12345");
//nloginUserMessage("", "12345");
//nloginUserMessage("John", "");

function calculateCartPrice(...prices) {
    let total = 0;
    for (let i = 0; i < prices.length; i++) {
        total += prices[i];
    }
    return total;
}       
const totalPrice = calculateCartPrice(10, 20, 30);
console.log(totalPrice);

function handleObject(anyObject){
    return `Hello ${anyObject.username}`
}

console.log(handleObject({username:"yash"}));