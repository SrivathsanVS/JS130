let throwError = () => {
  throw new Error("Illegal dimensions");
};

class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.sides = [side1, side2, side3];
    this.checkNegativeOrZero();
    this.checkValidTriangle();
  }
  checkNegativeOrZero() {
    this.sides.forEach(side => {
      if (side <= 0) throwError();
    });
    return true;
  }
  checkValidTriangle() {
    let combinations = [[this.side1 + this.side2, this.side3],
      [this.side2 + this.side3, this.side1],
      [this.side1 + this.side2, this.side3]];
    combinations.forEach(combination => {
      if (combination[0] <= combination[1]) {
        throwError();
      }
    });
    return true;
  }
  findNumberOfSidePairsEqual() {
    let option1 = Number(this.side1 === this.side2);
    let option2 = Number(this.side2 === this.side3);
    let option3 = Number(this.side3 === this.side1);
    return option1 + option2 + option3;
  }
  findTriangleType(numberOfSidePairsEqual) {
    if (numberOfSidePairsEqual === 0) return 'scalene';
    if (numberOfSidePairsEqual === 1) return 'isosceles';
    if (numberOfSidePairsEqual === 3) return 'equilateral';
    throwError();
    return NaN;
  }
  kind() {
    return this.findTriangleType(this.findNumberOfSidePairsEqual());
  }
}
module.exports = Triangle;
