function myBind(func, context) {
  return function(...args) {
    return func.call(context, ...args);
  };
}

// Test
let obj = {
  num: 37
};

function numAdd() {
  return this.num + [...arguments].reduce((acc, elem) => acc + elem, 0);
}

let addThirtySeven = myBind(numAdd, obj);
console.log(addThirtySeven(5));
console.log(addThirtySeven(5, 10, 15));
