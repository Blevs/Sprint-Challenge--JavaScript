# Sprint Challenge: JavaScript Fundamentals

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a survey of problems. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied variables, functions, object literals, arrays, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a survey of JavaScript problems.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in JavaScript fundamentals.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your project manager.

## Description

You will notice there are several JavaScript files being brought into the index.html file.  Each of those files contain JavaScript problems you need to solve.  If you get stuck on something, skip over it and come back to it later.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager

1. Describe the biggest difference between `.forEach` & `.map`.

The biggest difference between `.forEach` and `.map` is their return values.
They each apply a given callback function to each element of the array, but
`.map` will return a new array with each element being the resultant value.
`.forEach` returns `undefined`. This makes `.map` suited for data
transformation, and `.forEach` useful for applying an action with side-effects.

2. What is the difference between a function and a method?

A function is a construct that takes arguments, performs some computation, and
returns a value. A member is a type of function bound as an property of an
object which implicitly binds `this` to the object it belongs to during
execution.

3. What is closure?

A closure is an encapsulation of the lexical scope in which a function was
declared. In plainer English, when a function is declared the environment
enclosing it is captured and preserved so that the function can access variables
and other constructs declared within that scope. In the same way that functions
declared in the global scope can access global variables, this allows functions
declared within other scopes to do the same, even when it appears that context
no longer exists when the function is executed.

4. Describe the four rules of the 'this' keyword.

    1. Window/Global Object Binding   
       In the global scope, `this` is automatically bound to the window or console
       Object. `this` represents the Object in which our current execution is
       taking place, so in the global scope it is the global object.
    2. Implicit Binding   
       Whenever a member function or attribute of an object is accessed with the
       dot operator, `this` is implicitly bound to the Object preceding the dot.
       This allows us to access the Object within member functions without
       explicitly passing it as an argument.
    3. New Binding   
       When instantiating a new object using a constructor function `this` is
       bound to the new instance of the object, allow us to assign and reference
       that instance's attributes within the constructor.
    4. Explicit Binding   
       Using the special methods `.call` and `.apply` we can override the default
       binding of `this` with an explicit value of our choosing. This enables us
       to use the member functions of one object in the context of another.

5. Why do we need super() in an extended class?

`super()` is called in an extended class as syntactic sugar for
`Parent.call(this, arguments)`. It allows us to call the parent objects
constructor on the newly instantiated object with arguments of our choosing.
Most commonly, this allows us to automatically assign the object properties of
the parent object automatically.

## Project Set up

Follow these steps to set up and work on your project:

- [x] Create a forked copy of this project.
- [x] Add PM as collaborator on Github.
- [x] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [x] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [x] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
- [x] You are now ready to build this project with your preferred IDE
- [x] Implement the project on your Branch, committing changes regularly.
- [x] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your Project Manager as a Reviewer on the Pull-request
- [ ] PM then will count the HW as done by  merging the branch back into master.


## Minimum Viable Product

Your finished project must include all of the following requirements:

**Pro tip for this challenge: If something seems like it isn't working locally, copy and paste your code up to codepen and take another look at the console.**

## Task 1: Objects and Arrays
Test your knowledge of objects and arrays. 
* [ ] Use the [objects-arrays.js](challenges/objects-arrays.js) link to get started.  Read the instructions carefully!

## Task 2: Functions
This challenge takes a look at callbacks and closures as well as scope. 
* [ ] Use the [functions.js](challenges/functions.js) link to get started. Read the instructions carefully!

## Task 3: Prototypes
Create constructors, bind methods, and create cuboids in this prototypes challenge.
* [ ] Use the [prototypes.js](challenges/prototypes.js) link to get started. Read the instructions carefully!

## Task 4: Classes
Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.
* [ ] Use the [classes.js](challenges/classes.js) link to get started. Read the instructions carefully!

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Stretch Problems

There are a few stretch problems found throughout the files, don't work on them until you are finished with MVP requirements!
