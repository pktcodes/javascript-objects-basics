// All Objects in Javascript have access to constructor property that returns a constructor function that created it.
// built in constructor functions
// arrays and functions are objects in javascript

/* Constructor Functions */
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    console.log(
      `Hello, my name is ${this.firstName} ${this.lastName} and I love React`
    );
  };
}

const john = new Person("john", "anderson");
console.log(john.constructor);

const bob = new Person("bob", "anderson");
console.log(bob.constructor);

const object = {};
console.log(object.constructor);

const array = [];
console.log(array.constructor);

const sayHi = function () {};
console.log(sayHi.constructor);

const susy = new john.constructor("susy", "anderson");
susy.fullName();
