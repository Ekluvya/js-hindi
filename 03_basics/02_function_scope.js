var c = 300
let a = 400
if(true) {
    let a = 40
    var c = 50
    const b = 60
    console.log("Inside function: ", a, b, c);
}

console.log("Outside function: ", c);
console.log(a);