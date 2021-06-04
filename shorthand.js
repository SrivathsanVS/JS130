function shortHand(...strings) {
    return {
      first: strings[0],
      last: strings[strings.length - 1],
      middle: strings.slice(2, 5).sort()
    }
}

let sampleArr = ['a', 'inec', 'jncrc',
  'io', 'edck', 'conroc'];

let {first, middle, last} = shortHand(...sampleArr.slice(1, 6));
console.log(first);
console.log(middle);
console.log(last);
