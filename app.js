// call - runs instantly, arguments - list of items
// call - runs instantly, arguments - array of items
// bind - assign, use later, arguments - list of items

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

// assign, call it later
const susanGreet = greet.bind(susan, "macomb", "illinois");
susanGreet();
