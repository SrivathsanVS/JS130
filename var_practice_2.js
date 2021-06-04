// function foo(condition) {
//   console.log(bar); // undefined
//
//   qux = 0.5772;
//
//   if (condition) {
//     var qux = 3.1415;
//     console.log(qux); // 3.1415
//   } else {
//     var bar = 24;
//
//     var xyzzy = function() {
//       var qux = 2.7183;
//       console.log(qux);
//     };
//
//     console.log(qux);
//     console.log(xyzzy());
//   }
//
//   qux = 42;
//   console.log(qux); // 42
// }
//
// foo(true);
// foo(false);

function foo(condition) {
  let bar;
  console.log(bar); // undefined

  let qux = 0.5772;

  if (condition) {
    qux = 3.1415;
    console.log(qux); // 3.1415
  } else {
    let xyzzy = function() {
      var qux = 2.7183;
      console.log(qux);
    };

    console.log(qux);
    console.log(xyzzy());
  }

  qux = 42;
  console.log(qux); // 42
}

foo(true);
foo(false);
