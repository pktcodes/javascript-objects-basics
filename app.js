// call - runs instantly, arguments - list of items

const john = {
  name: "john",
  age: 25,
  greet: function () {
    console.log(this);
    console.log(`Hi, my name is ${this.name} and ${this.age}`);
  },
};

const susan = {
  name: "susan",
  age: 21,
};

function greet() {
  console.log(this);
  console.log(`Hi, my name ${this.name} and I am ${this.age} years old`);
}

// this will fail
// susan.greet();
// greet();
const secondGreet = john.greet;
// secondGreet();

greet.call(john);
greet.call(susan);
greet.call({ name: "peter", age: 30 });

// Making "this" point to susan object
john.greet.call(susan);
