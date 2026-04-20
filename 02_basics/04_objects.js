const tinderUser = new Object();
tinderUser.name = "John";
tinderUser.age = 30;
tinderUser.isActive = true;

//console.log(tinderUser);

const regularUser = {
    fullname: {
        userfullname: {
            firstname: "Jane",
            lastname: "Doe"
        }
    },
    age: 25,
    isActive: false
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 1, d: 3 };
//const obj3 = Object.assign({},obj1, obj2); //if parenthesis is not used then all values will be merged in object1
//console.log(obj3);
//console.log(obj1);

const obj3 = { ...obj1, ...obj2 }; //spread operator
console.log(obj3);
console.log(obj1);

console.log(Object.keys(obj3)); //returns an array of keys
console.log(Object.values(obj3)); //returns an array of values
console.log(Object.entries(obj3)); //returns an array of key-value pairs
console.log(obj3.hasOwnProperty('a')); //returns true if the object has the specified property

const course = {
    courseName: "JavaScript",
    price: 999,
    courseInstructor: "John Doe"
}

const {courseInstructor:instructor} = course
console.log(instructor);