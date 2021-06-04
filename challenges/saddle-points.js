function findMaxValIndex(arr) {
  let maxValIndex = 0;
  let maxVal = -Infinity;
  for (let index in arr) {
    if (arr[index] > maxVal) {
      maxVal = arr[index];
      maxValIndex = index;
    }
  }
  return maxValIndex;
}

function checkColVal(arr, checkIndex) {
  let checkVal = arr[checkIndex];
  for (let index in arr) {
    if (arr[index] < checkVal) return false;
  }
  return true;
}

class Matrix {
  constructor(string) {
    this.rows = string.split('\n').map(elem => {
      return elem.trim().split(' ').map(subElem => Number(subElem));
    });
    this.calcColumns();
    this.saddlePoints = this.calcSaddlePoints();
  }
  calcColumns() {
    this.columns = [];
    for (let rowLength = 0; rowLength < this.rows[0].length; rowLength++) {
      this.columns[rowLength] = [];
      for (let index = 0; index < this.rows.length; index++) {
        this.columns[rowLength].push(this.rows[index][rowLength]);
      }
    }
  }
  calcSaddlePoints() {
    let outputArr = [];
    // Iterate through rows
    for (let rowIndex in this.rows) {
      // For each row, find index of max val
      let maxValIndex = findMaxValIndex(this.rows[rowIndex]);
      if (checkColVal(this.columns[maxValIndex], rowIndex)) {
        outputArr.push([Number(rowIndex), Number(maxValIndex)]);
      }
    }
    return outputArr;
  }
}
const matrix = new Matrix("18 3 39 19 91\n38 10 8 77 320\n3 4 8 6 7");
console.log(matrix.saddlePoints);
// let matrix = new Matrix("1 2 3\n4 5 6\n7 8 9\n 8 7 6");
// console.log(matrix.columns);
// console.log(matrix.rows);
module.exports = Matrix;
