// call - runs instantly, arguments - list of items
// apply - runs instantly, arguments - array of items
// bind - assign, use later, arguments - list of items

const btn = document.querySelector(".increment");

const counter = {
  count: 0,
  increment() {
    this.count = this.count + 1;
    console.log(this);
    console.log(this.count);
  },
};

// this will fail, since it points to btn
// btn.addEventListener("click", counter.increment);

// some edge cases like remove event listener needs a function reference not a function
// btn.addEventListener("click", counter.increment.bind(counter));

// this will work
const increment = counter.increment.bind(counter);
btn.addEventListener("click", increment);
btn.removeEventListener("click", increment);
