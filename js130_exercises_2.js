// // Our very own bind
// function myBind(func, context) {
//   return function() {
//     return func.call(context);
//   };
// }

// myBind() Improved
// function myBind(func, context, ...bindArgs) {
//   return function() {
//     let args = bindArgs.concat(Array.prototype.slice.call(arguments));
//     return func.apply(context, args);
//   };
// }
//
// // Test for myBind()
// function addArguments(arg1, arg2) {
//   return arg1 + arg2;
// }
// const addThirtySeven = myBind(addArguments, null, 37);
// const result2 = addThirtySeven(5);
// console.log(result2);

// Make a Stack
// function newStack() {
//   let stackArr = [];
//   return {
//     push(elem) {
//       stackArr.push(elem);
//     },
//     pop() {
//       return stackArr.pop();
//     },
//     printStack() {
//       stackArr.forEach(elem => console.log(elem + '\n'));
//     }
//   };
// }
// let obj = newStack();
// obj.push(1);

// Delegate
// function delegate(obj, methodName, args) {
//   return function() {
//     return obj[methodName](args);
//   };
// }
// // Test
// let foo = {
//   name: 'test',
//   bar: function(greeting) {
//     console.log(greeting + ' ' + this.name);
//   },
// };
// let baz = {
//   qux: delegate(foo, 'bar', 'hello'),
// };
// baz.qux();   // logs 'hello test';
// foo.bar = function() { console.log('changed'); };
// baz.qux();          // logs 'changed'

// Anonymizer
// let rlsync = require('readline-sync');
//
// let asciiOfa = 'a'.charCodeAt(0);
// let asciiOfA = 'A'.charCodeAt(0);
// let lowerAlphabetChars = [...Array(26).keys()].map(elem => String.fromCharCode(asciiOfa + elem));
// let upperAlphabetChars = [...Array(26).keys()].map(elem => String.fromCharCode(asciiOfA + elem));
// let alphabetChars = lowerAlphabetChars.concat(upperAlphabetChars);
//
// function alphabetPicker() {
//   let index = Math.floor(Math.random() * alphabetChars.length);
//   return alphabetChars[index];
// }
//
// function displayNameGenerator() {
//   let displayName = [...Array(16).keys()];
//   return displayName.map(elem => alphabetPicker(elem)).join('');
// }
//
// function pwdChecker(attempt, password) {
//   return attempt === password;
// }
//
// let Account = (function() {
//   let email = '';
//   let password = '';
//   let firstname = '';
//   let lastname = '';
//   return {
//     reanonymize(attempt) {
//       if (!pwdChecker(attempt, this.password)) return 'Invalid Password';
//       this.displayName = displayNameGenerator();
//       return true;
//     },
//     resetPassword(attempt, newPwd) {
//       if (!pwdChecker(attempt, this.password)) return 'Invalid Password';
//       this.password = newPwd;
//       return true;
//     },
//     firstName(attempt) {
//       if (!pwdChecker(attempt, this.password)) return 'Invalid Password';
//       return this.firstname;
//     },
//     lastName(attempt) {
//       if (!pwdChecker(attempt, this.password)) return 'Invalid Password';
//       return this.lastname;
//     },
//     email(attempt) {
//       if (!pwdChecker(attempt, this.password)) return 'Invalid Password';
//       return this.emailString;
//     },
//     init(email, password, firstName, lastName) {
//       this.emailString = email;
//       this.password = password;
//       this.firstname = firstName;
//       this.lastname = lastName;
//       this.displayName = displayNameGenerator();
//       return this;
//     }
//   };
// })();
//
// // Test program
// let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
// console.log(fooBar.firstName);                     // returns the firstName function
// console.log(fooBar.email);                         // returns the email function
// console.log(fooBar.firstName('123456'));           // logs 'foo'
// console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
// console.log(fooBar.displayName);                   // logs 16 character sequence
// console.log(fooBar.resetPassword('123', 'abc'));   // logs 'Invalid Password';
// console.log(fooBar.resetPassword('123456', 'abc'));// logs true
//
// let displayName = fooBar.displayName;
// fooBar.reanonymize('abc');                         // returns true
// console.log(displayName === fooBar.displayName);   // logs false

// Mini Inventory Management System
function skuCodeGenerator(itemName, category) {
  return itemName.replace(' ', '').slice(0, 3) +
    category.slice(0, 2);
}

function itemValidityCheck(itemName, category) {
  let itemNameLengthCheck = (itemName.replace(' ', '').length >= 5);
  let categorySpaceCheck = (category.indexOf(' ') === -1);
  let categoryLengthCheck = (category.length >= 5);
  return (itemNameLengthCheck && categorySpaceCheck && categoryLengthCheck);
}

let ItemManager = {
  items: [],
  create(itemName, category) {

  }
}
