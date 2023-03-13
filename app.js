// this
// points to the object which is left of the dot

const john = {
  firstName: "john",
  lastName: "anderson",
  fullName: function () {
    console.log(this);
    console.log(`hello, my name is ${this.firstName} ${this.lastName}`);
  },
};

const bob = {
  firstName: "peter",
  lastName: "anderson",
  fullName: function () {
    console.log(this);
    console.log(`hello, my name is ${this.firstName} ${this.lastName}`);
  },
};

john.fullName();
bob.fullName();
