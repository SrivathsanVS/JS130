function myBind(func, context) {
  return function() {
    return func.call(context);
  };
}

// Test
let obj = {
  a: 2,
  b: 3,
  sq: function () {
    return (this.a + this.b) ** 2;
  }
};

let boundFunc = myBind(obj.sq, obj);
console.log(boundFunc());
