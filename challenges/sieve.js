function createUnmarkedList(upperLimit) {
  return Array(upperLimit - 1).fill(2).map((elem, index) => elem + index);
}

function primes(number) {
  let unmarkedArr = createUnmarkedList(number);
  let multiple = (num, multiplyingFactor) => num * multiplyingFactor;
  let index = 0;
  let iteratingNum = (index) => unmarkedArr[index];
  while (iteratingNum(index) < number) {
    let multiplyingFactor = iteratingNum(index);
    while (multiple(iteratingNum(index), multiplyingFactor) <=  number) {
      let elem = multiple(iteratingNum(index), multiplyingFactor);
      if (unmarkedArr.indexOf(elem) !== -1) {
        unmarkedArr.splice(unmarkedArr.indexOf(elem), 1);
      }
      multiplyingFactor++;
    }
    index++;
  }
  return unmarkedArr;
}
module.exports = primes;
