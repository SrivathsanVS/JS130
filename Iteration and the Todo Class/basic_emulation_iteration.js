// 1. Filter
function filter(array, callback) {
  let filterArr = [];
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index])) filterArr.push(array[index]);
  }
  return filterArr;
}

// 1.1 Test filter method
// let numbers = [1, 2, 3, 4, 5];
// let numbersCopy = numbers.slice();
// console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
// console.log(filter(numbers, number => number < 0)); // => []
// console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]
//
// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(filter(values, value => typeof value === "string"));
// console.log(numbers.join("") === numbersCopy.join(""));


// 2. Map
function map(array, callback) {
  let mapArr = [];
  for (let index = 0; index < array.length; index++) {
    mapArr.push(callback(array[index]));
  }
  return mapArr;
}

// 2.1 Test map method
// let numbers = [1, 2, 3, 4, 5];
// console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
// console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
// console.log(map(numbers, () => false));
// // => [ false, false, false, false, false ]
//
// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(map(values, value => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]

// 3. Reduce
function reduce(array, callback, accumulator = 0) {
  for (let index = 0; index < array.length; index++) {
    accumulator = callback(accumulator, array[index]);
  }
  return accumulator;
}

// 3.1 Test reduce method
// let numbers = [1, 2, 3, 4, 5];
// console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
// console.log(reduce(numbers, (prod, number) => prod * number, 1));     // => 120
// console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
// console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
// console.log(reduce([], (accum, number) => accum + number));
// // => undefined
//
// let stooges = ["Mo", "Larry", "Curly"];
// console.log(reduce(stooges, (reversedStooges, stooge) => {
//   reversedStooges.unshift(stooge);
//   return reversedStooges;
// }, []));
// => ["Curly", "Larry", "Mo"]

// 4. Emulating filter with reduce
function emulateFilterWithReduce(array, callback) {
  return array.reduce((acc, elem) => {
    if (callback(elem)) acc.push(elem);
    return acc;
  }, []);
}
// // 4.1 Test filter method
// let numbers = [1, 2, 3, 4, 5];
// let numbersCopy = numbers.slice();
// console.log(emulateFilterWithReduce(numbers, number => number > 3)); // => [ 4, 5 ]
// console.log(emulateFilterWithReduce(numbers, number => number < 0)); // => []
// console.log(emulateFilterWithReduce(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]
//
// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(emulateFilterWithReduce(values, value => typeof value === "string"));
// console.log(numbers.join("") === numbersCopy.join(""));

// 5. Emulating map with reduce
function emulateMapWithReduce(array, callback) {
  return array.reduce((acc, elem) => {
    acc.push(callback(elem));
    return acc;
  }, []);
}

// 5.1 Test map method
let numbers = [1, 2, 3, 4, 5];
console.log(emulateMapWithReduce(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
console.log(emulateMapWithReduce(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
console.log(emulateMapWithReduce(numbers, () => false));
// => [ false, false, false, false, false ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(emulateMapWithReduce(values, value => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]
