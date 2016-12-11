 var names = ['Andrew', 'Julie', 'Jen'];
//
// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// // using arrow function
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });

// var returnMe = (name) => name + '!';
// console.log(returnMe('Albert'));

// note:  anonymous functions have 'this' binding
//        arrow functions take on their parent's 'this' binding.

// var person = {
//   name: 'Alice',
//   greet: function () {
//     names.forEach(function (name) {
//       console.log(this.name + ' says hi to ' + name)
//     });
//   }
// };

// var person = {
//   name: 'Alice',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name)
//     });
//   }
// };

// person.greet();

// in lines 18-25, returns 'undefined says hi to Andrew', etc.
// because anonymous function updates the 'this' keyword.

// in lines 27-34, returns 'Alice says hi to Andrew', etc.
// because arrow function does not update the 'this' keyword --
// it still refers to the 'person' object
// ----------

// Challenge area - create two arrow functions that do what the anonymous function does
function add (a, b) {
  return a + b;
}

// addStatement - use curly braces
// addExpression - use expression syntax to handle all on one line.

var addStatement = (a, b) => {
  return a + b;
};

var addExpression = (a, b) => a + b;  // no need to use return here!

console.log(add(1, 3));
console.log(add(0, 9));

console.log(addStatement(1, 3));
console.log(addStatement(0, 9));

console.log(addExpression(1, 3));
console.log(addExpression(0, 9));
