// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

function consume(a, b, cb) {
    return cb(a, b);
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function greeting(first, last) {
    return `Hello ${first} ${last}, nice to meet you!`
}

/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume(2,2,add); // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedFunction()` can access the variable `internal`.

// Explanation: 
// `nestedFunction` is able to access the variable `internal` because of
// scoped variable resolution and closures. When JavaScript encounters the
// reference to the variable `internal` it first tries to resolve it within the
// local scope (inside the `nestedFunction`), and does not find it. It then
// proceeds to the outer scope (inside `myFunction`) and finds the variable
// definition accesses it's value.
// `nestedFunction` would even be able to access the variable `external` as the
// resolution would proceed all the way to the global scope while trying to
// resolve a variable.
// Closures come into play because `nestedFunction` would still be able to
// access the `internal` variable even if the function was executed outside of
// the scope in which `internal` was declared. This is because JavaScript uses
// lexical, and not dynamic, scoping. The environment in which the function was
// declared, its lexical scope, is captured and when `nestedFunction` is
// executed, even in a very different context, resolution will still see the
// definition scope, even if we don't, and the values within this scope are //
// still able to be resolved, referenced and modified.


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();
