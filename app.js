/*
ES6 Classes - Syntactic Sugar
Prototypal Inheritance

No keywords inside the class (bank, deposit(){}) apart from constructor
Property(bank) are created on each instance
Methods(deposit(){}) are on prototype
*/

class Account {
  constructor(name, initialBalance) {
    this.name = name;
    this.balance = initialBalance;
  }
  bank = "Chase"; //This gets created on each instance
  deposit(amount) {
    this.balance = this.balance + amount;
    console.log(`Hello ${this.name}, your balance is ${this.balance}`);
  }
}

// Again, if want the a property on prototype to prevent memory issues, copy of same in each instance
// Account.prototype.bank = "Bank of America";

const john = new Account("john", 200);
console.log(john);
console.log(john.name);
console.log(john.bank);
john.deposit(200);

const bob = new Account("bob", 0);
console.log(bob);
console.log(bob.name);
console.log(john.bank);
bob.deposit(1000);
