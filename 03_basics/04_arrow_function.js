const user = {
  name: 'John',
  age: 30,
  sayHello: function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  },
  sayHelloArrow: () => {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

user.sayHello(); // Hello, my name is John and I am 30 years old.
//user.sayHelloArrow(); // Hello, my name is undefined and I am undefined years old.

// Explanation:
// In the sayHello method, the regular function syntax allows us to access the 'this' keyword, which refers to the user object. Therefore, we can access the name and age properties correctly.

// However, in the sayHelloArrow method, we are using an arrow function. 
// Arrow functions do not have their own 'this' context; instead, 
// they inherit 'this' from the surrounding scope. In this case, since there is 
// no surrounding scope that defines 'this', it defaults to undefined.
//  As a result, we cannot access the name and age properties, and they are both undefined in the output.  

function chai() {
    console.log(this);
}

//chai(); // Window object (in a browser environment) or global object (in Node.js)

// Explanation:
// When we call the chai function, it is executed in the global context. 
// In a browser environment, the global context is represented by the Window object, 
// while in Node.js, it is represented by the global object. 
// Therefore, when we log 'this' inside the chai function, it refers to the global context, which is why we see the Window or global object in the output.

const addOne = (num) => num + 1;
console.log(addOne(5)); // 6