function one() {
    const username = "John Doe";
    function two() {
        const website = "www.example.com";
        console.log(username);
    }
    //console.log(website); // ReferenceError: website is not defined
    two();
}
one();

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(addOne(5)); //6
function addOne(num) {
    return num + 1;
}

console.log(addTwo(5)) //Error: Cannot access 'addTwo' before initialization
//console.log(num); // ReferenceError: num is not defined
const addTwo = function(num) {
    return num + 2;
}


