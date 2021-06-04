function Triangle(side1, side2, side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
}

let throwError = () => {
  throw new Error("Illegal dimensions");
};

function checkIllegalDimensions(side1, side2, side3) {
  if (side1 + side2 < side3) return true;
  if (side2 + side3 < side1) return true;
  return (side1 + side3 < side2);
}

function checkIllegalInputs(...sides) {
  return sides.some(elem => (elem <= 0));
}

function sideCheck(...sides) {
  if (checkIllegalInputs(...sides) || checkIllegalDimensions(...sides)) {
    throwError();
  }
}

Triangle.prototype.checkEquilateral = function () {
  return ((this.side1 === this.side2) && (this.side2 === this.side3));
};

Triangle.prototype.checkIsoscles = function () {
  return ((this.side1 === this.side2) || (this.side2 === this.side3) ||
    (this.side1 === this.side3));
};

Triangle.prototype.kind = function() {
  sideCheck(this.side1, this.side2, this.side3);
  if (this.checkEquilateral()) return 'equilateral';
  if (this.checkIsoscles()) return 'isosceles';
  return 'scalene';
};

module.exports = Triangle;
