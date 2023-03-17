// call - runs instantly, arguments - list of items
// call - runs instantly, arguments - array of items

const john = {
  name: "john",
  age: 25,
};

const susan = {
  name: "susan",
  age: 21,
};

function greet(city, country) {
  console.log(this);
  console.log(
    `Hi, my name ${this.name} and I am ${this.age} years old and I live in ${city}, ${country}`
  );
}

// greet.call(john, "san diego", "us");
// greet.call(susan, "san diego", "us");
// greet.call({ name: "peter", age: 30 }, "san diego", "us");

greet.apply(john, ["san diego", "us"]);
greet.apply(susan, ["san diego", "us"]);
greet.apply({ name: "peter", age: 30 }, ["san diego", "us"]);
