class Luhn {
  constructor(numberString = '1') {
    this.arr = numberString.replace(/ /g, '').split('');
  }
  valid() {
    if (this.arr.length < 2) return false;
    let doubledArr = this.doubledArr();
    let sum = doubledArr.reduce((acc, elem) => acc + parseInt(elem, 10), 0);
    console.log(sum);
    if (isNaN(sum)) return false;
    return !(sum % 10);
  }
  doubledArr() {
    let newArr = this.arr.slice();
    for (let index = newArr.length - 2; index >= 0; index -= 2) {
      let num = parseInt(newArr[index], 10);
      newArr[index] = (num * 2 > 9) ? ((num * 2) - 9) : num * 2;
    }
    return newArr;
  }
}

module.exports = Luhn;
