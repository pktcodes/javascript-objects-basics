// Objects Basics

/*
Objects are collections of key (property) value pairs
Property values can be strings, numbers, booleans, arrays and functions however if the property value is a function it's called a method
*/

// object literal syntax,{}
// dot notation

const person = {
  name: "john",
  age: 25,
  siblings: ["anna", "susan", "peter"],
  greet: function (name) {
    console.log(`Hi, I am ${name}`);
  },
  sayHello(name) {
    console.log(`Hello, My name is ${name}`);
  },
};

console.log(person.name);

// aassign and access the variable
const firstName = person.sayHello("john");

// Adding property
person.city = "illinois";

//Deleting property
// delete person.siblings;
const deleteSiblings = delete person.siblings;
console.log(deleteSiblings);

console.log(person);
