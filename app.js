// Blue Print
// Factory Functions and Constructor Functions
// Constructor Functions
// new - creates new object, points to it, omit return

/* Constructor Functions */
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    console.log(
      `Hello, my name is ${this.firstName} ${this.lastName} and I love React`
    );
  };
  console.log(this);
}

const john = new Person("john", "aderson");
john.fullName();

const bob = new Person("bob", "jordon");
bob.fullName();

/* Factory Functions */
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

// const john = createPerson("john", "anderson");
// john.fullName();

// const bob = createPerson("bob", "jordan");
// bob.fullName();

// const susy = createPerson("susy", "apple");
// susy.fullName();
