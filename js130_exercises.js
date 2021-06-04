// // Our very own bind
// function myBind(func, context) {
//   return function(arguments=[]) {
//     return func.apply(context, arguments);
//   }
// }
//
// // Test bind
// let obj = {
//   a: 1,
//   b: 2
// };
// let sampleFunc = function(param1=2, param2=2) {
//   return this.a + this.b + param1 + param2;
// }
// console.log(myBind(sampleFunc, obj)([0, 0]));

// // myBind() Improved
// function myBind(func, context, ...fixedArgs) {
//   return function(...arguments) {
//     return func.apply(context, [...fixedArgs, ...arguments]);
//   }
// }
//
// // Test bind
// let add = (num1, num2) => num1 + num2;
// let add7 = myBind(add, null, 7);
// console.log(add7(8));

// // Make a Stack
// function newStack() {
//   let stackArr = [];
//   return {
//     push(elem) {
//       stackArr.push(elem);
//     },
//     pop() {
//       return stackArr.splice(stackArr.length - 1, 1)[0];
//     },
//     printStack() {
//       stackArr.forEach(elem => console.log(elem));
//     }
//   }
// }
//
// // Test stack creation
// let stack = newStack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.printStack();
// console.log("");
// console.log(stack.pop());
// console.log("");
// stack.printStack();

// Delegate
// function delegate(obj, method, ...args) {
//   let objCopy = obj;
//   return function() {
//     return obj[method].apply(obj, args);
//   }
// }
//
// let foo = {
//   name: 'test',
//   bar: function(greeting) {
//     console.log(greeting + ' ' + this.name);
//   },
// };
//
// let baz = {
//   qux: delegate(foo, 'bar', 'hello'),
// };
//
// baz.qux();   // logs 'hello test';
//
// foo.bar = function() { console.log('changed'); };
//
// baz.qux();

// Classical Object Creation
// class Person {
//   constructor(firstName, lastName, age, gender) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.gender = gender;
//   }
//   fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
//   eat() {
//     console.log("Eating");
//   }
//   communicate() {
//     console.log("Communicating");
//   }
//   sleep() {
//     console.log("Sleeping");
//   }
// }
// class Doctor extends Person {
//   constructor(firstName, lastName, age, gender, specialization) {
//     super(firstName, lastName, age, gender);
//     this.specialization = specialization;
//   }
//   diagnose() {
//     console.log("Diagnosing");
//   }
// }
// class Professor extends Person {
//   constructor(firstName, lastName, age, gender, subject) {
//     super(firstName, lastName, age, gender);
//     this.subject = subject;
//   }
//   teach() {
//     console.log("Teaching");
//   }
// }
// class Student extends Person {
//   constructor(firstName, lastName, age, gender, degree) {
//     super(firstName, lastName, age, gender);
//     this.degree = degree;
//   }
//   study() {
//     console.log("Studying");
//   }
// }
// class GraduateStudent extends Student {
//   constructor(firstName, lastName, age, gender, degree, graduateDegree) {
//     super(firstName, lastName, age, gender, degree);
//     this.graduateDegree = graduateDegree;
//   }
//   research() {
//     console.log("Researching");
//   }
// }
//
// let Professional = {
//   invoice() {
//     console.log(this.fullName() + " is Billing customer");
//   },
//   payTax() {
//     console.log(this.fullName() + " Paying taxes");
//   }
// };
//
// function extend(obj, mixin) {
//   for (let method in mixin) {
//     obj[method] = () => mixin[method].call(obj);
//   }
//   return obj;
// }
//
// let doctor = extend(new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics'), Professional);
// console.log(doctor instanceof Person);     // logs true
// console.log(doctor instanceof Doctor);     // logs true
// doctor.eat();                              // logs 'Eating'
// doctor.communicate();                      // logs 'Communicating'
// doctor.sleep();                            // logs 'Sleeping'
// console.log(doctor.fullName());            // logs 'foo bar'
// doctor.diagnose();                         // logs 'Diagnosing'
//
// let professor = extend(new Professor('foo', 'bar', 21, 'gender', 'Systems Engineering'), Professional);
// console.log(professor instanceof Person);     // logs true
// console.log(professor instanceof Professor);  // logs true
// professor.eat();                              // logs 'Eating'
// professor.communicate();                      // logs 'Communicating'
// professor.sleep();                            // logs 'Sleeping'
// console.log(professor.fullName());            // logs 'foo bar'
// professor.teach();                            // logs 'Teaching'
//
// doctor.invoice();                          // logs 'foo bar is Billing customer'
// doctor.payTax();                           // logs 'foo bar Paying taxes'
//
// Professional.invoice = function() {
//   console.log(this.fullName() + ' is Asking customer to pay');
// };
//
// doctor.invoice();                          // logs 'foo bar is Asking customer to pay'
// professor.invoice();                       // logs 'foo bar is Asking customer to pay'
// professor.payTax();                        // logs 'foo bar Paying taxes'

// Anonymizer
// let Account = (function() {
//   function generateArr() {
//     let randomChar = () => String.fromCharCode(parseInt(Math.random() * 93 + 33));
//     return Array(16).fill(1).map(elem => randomChar()).join('');
//   }
//
//   function validatePwd(attemptPwd, realPwd) {
//     return (attemptPwd === realPwd);
//   }
//
//   return {
//     reanonymize(password) {
//       if (!validatePwd(password, this._password)) return "Invalid password";
//       this.displayName = generateArr();
//       return true;
//     },
//     resetPassword(password, newPwd) {
//       if (!validatePwd(password, this._password)) return "Invalid password";
//       this._password = newPwd;
//       return true;
//     },
//     firstName(password) {
//       if (!validatePwd(password, this._password)) return "Invalid password";
//       return this._firstName;
//     },
//     lastName(password) {
//       if (!validatePwd(password, this._password)) return "Invalid password";
//       return this._lastName;
//     },
//     email(password) {
//       if (!validatePwd(password, this._password)) return "Invalid password";
//       return this._email;
//     },
//     init(email, password, firstName, lastName) {
//       this._email = email;
//       this._password = password;
//       this._firstName = firstName;
//       this._lastName = lastName;
//       this.displayName = generateArr();
//       return this;
//     }
//   };
// })();
//
// let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
// console.log(fooBar.firstName);                     // returns the firstName function
// console.log(fooBar.email);                         // returns the email function
// console.log(fooBar.firstName('123456'));           // logs 'foo'
// console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
// console.log(fooBar.displayName);                   // logs 16 character sequence
// console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
// console.log(fooBar.resetPassword('123456', 'abc')) // logs true
//
// let displayName = fooBar.displayName;
// console.log(fooBar.reanonymize('abc'));                         // returns true
// console.log(displayName === fooBar.displayName);   // logs false
//
//
// let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
// console.log(fooBar.firstName('abc'));
// console.log(fooBar.email('abc'));
// console.log(bazQux.firstName('123456'));
// console.log(bazQux.email('123456'));

// Mini Inventory Management System
let ItemManager = (function() {
  function itemIsInvalid(item) {
    return (item.replace(' ', '').length < 5);
  }
  function categoryIsInvalid(category) {
    return ((category.includes(' ') || category.length < 5));
  }
  function quantityIsInvalid(quantity) {
    return (!isFinite(quantity));
  }
  function createSKUCode(item, category) {
    return (item.replace(' ', '').slice(0, 3) + category.slice(0, 2)).toUpperCase();
  }
  function skuCodeLookup(itemList, skuCode) {
    for (let index in itemList) {
      if (itemList[index].skuCode === skuCode) return [index, itemList[index]];
    }
  }
  function listIterator(itemList, conditional) {
    return itemList.filter(item => conditional(item));
  }
  return {
    items: [],
    create(item, category, quantity) {
      if (itemIsInvalid(item) || categoryIsInvalid(category) || quantityIsInvalid(quantity)) return false;
      // console.log("Not reachd");
      let skuCode = createSKUCode(item, category);
      this.items.push({skuCode, itemName: item, category, quantity});
    },
    update(skuCode, replaceObject) {
      let [index, item] = skuCodeLookup(this.items, skuCode);
      console.log(item);
      Object.assign(item, replaceObject);
    },
    delete(skuCode) {
      let [index, item] = skuCodeLookup(this.items, skuCode);
      this.items.splice(index, 1);
    },
    inStock() {
      let conditional = (item) => (item.quantity > 0);
      return listIterator(this.items, conditional);
    },
    itemsInCategory(category) {
      let conditional = (item) => (item.category === category);
      return listIterator(this.items, conditional);
    }
  }
})();

let ReportManager = (function () {
  return {
    init(itemManager) {
      this.items = itemManager;
    },
    createReporter(skuCode) {
      let item = this.items.items.filter(item => (item.skuCode === skuCode))[0];
      return {
        itemInfo() {
          item.forEach(key => console.log(`${key}: ${item[key]}`));
        }
      };
    },
    reportInStock() {
      console.log((this.items.inStock()).map(item => item.itemName).join());
    }
  }
})();

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items
// console.log(ItemManager.items);
ReportManager.init(ItemManager);
// logs soccer ball,football,kitchen pot
ReportManager.reportInStock();

ItemManager.update('SOCSP', { quantity: 0 });
// returns list with the item objects for football and kitchen pot
// football,kitchen pot
ReportManager.reportInStock();




// // Rest Parameters
// function sum(...args) {
//   return args.reduce((acc, elem) => acc = acc + elem, 0);
// }
//
// console.log(sum(1, 4, 5, 6)); // 16
