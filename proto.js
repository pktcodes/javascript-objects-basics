/*
Property Lookup
If child does not have ask parent
Everything in JS is an Object
*/

function Account(name, initialBalance) {
  this.name = name;
  this.balance = initialBalance;
  this.bank = "Bank Of America";
  //This takes precedence over proto, if not present then it will look property and methods in proto
}

Account.prototype.bank = "CHASE";
Account.prototype.deposit = function (amount) {
  this.balance = this.balance + amount;
  console.log(`Hello ${this.name}, your balance is ${this.balance}`);
};

const john = new Account("john", 200);
const bob = new Account("bob", 400);

// john.deposit(300);
// bob.deposit(1000);

console.log(john);
console.log(bob.bank);

console.log({});
console.log([]);
