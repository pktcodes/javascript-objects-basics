// nested objects
// set variable as property value
// dot notation vs bracket notation

const age = 30;

let random = "random value";
random = "age";

const person = {
  name: "john",
  age: age,
  siblings: ["anna", "susan", "peter"],
  greet: function (name) {
    console.log(`Hi, I am ${name}`);
  },
  sayHello(name) {
    console.log(`Hello, My name is ${name}`);
  },
  job: {
    title: "developer",
    company: {
      name: "coding addict",
      address: "123 main street",
    },
  },
  "random-value": "random",
};

console.log(person.job.company.name);

console.log(person.work); // undefined

/* Cannot read properties of undefined (reading 'title') */
// console.log(person.work.title);

console.log(person["random-value"]);

// check in person object for the property with age which is value of "random"
console.log(person[random]);

console.log(person);
