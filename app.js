/*
Prototypal Inheritance Model
Javascript uses prototypal inheritance model. That means that every constructor function/class has a prototype property that is shared by every instance of the constructor/class. So any properties and methods or prototype can be acessed by every instance. prototype property returns a object
*/

function Account(name, initialBalance) {
  this.name = name;
  this.balance = initialBalance;
}

Account.prototype.bank = "CHASE";
Account.prototype.deposit = function (amount) {
  this.balance = this.balance + amount;
  console.log(`Hello ${this.name}, your balance is ${this.balance}`);
};

const john = new Account("john", 200);
const bob = new Account("bob", 400);

john.deposit(300);
bob.deposit(1000);

console.log(john);
console.log(bob.bank);
