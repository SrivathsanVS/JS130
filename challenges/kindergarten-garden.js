const DEFAULT_STUDENTS = ['Alice', 'Bob', 'Charlie', 'David',
  'Eve', 'Fred', 'Ginny', 'Harriet',
  'Ileana', 'Joseph', 'Kincaid', 'Larry'];

const PLANT_DICT = {
  G: 'grass',
  C: 'clover',
  R: 'radishes',
  V: 'violets'
};

function sliceString(string1, string2, index) {
  return string1.slice(2 * index,
    2 * (index + 1)) + string2.slice(2 * index, 2 * (index + 1));
}

function mapString(abbreviation) {
  return abbreviation.split('').map(char => PLANT_DICT[char]);
}


class Garden {
  constructor(plantString, students = DEFAULT_STUDENTS) {
    [this.row1, this.row2] = plantString.split('\n');
    students.sort().forEach((student, index) => {
      this[student.toLowerCase()] = mapString(sliceString(this.row1,
        this.row2, index));
    });
  }
}

module.exports = Garden;
