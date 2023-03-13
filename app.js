// Blue Print
// Factory Functions and Constructor Functions
// Factory Functions

// const john = {
//   firstName: "john",
//   lastName: "anderson",
//   fullName: function () {
//     // console.log(this);
//     console.log(
//       `Hello, my name is ${this.firstName} ${this.lastName} and I love JS`
//     );
//   },
// };

// const bob = {
//   firstName: "bob",
//   lastName: "anderson",
//   fullName: function () {
//     // console.log(this);
//     console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
//   },
// };

// john.fullName();
// bob.fullName();

function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: function () {
      console.log(
        `Hello, my name is ${this.firstName} ${this.lastName} and I love JS`
      );
    },
  };
}

const john = createPerson("john", "anderson");
john.fullName();

const bob = createPerson("bob", "jordan");
bob.fullName();

const susy = createPerson("susy", "apple");
susy.fullName();
