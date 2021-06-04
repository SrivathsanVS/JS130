class Custom {
  constructor(arr = []) {
    this._set = {};
    for (let index in arr) {
      this._set[arr[index]] = 1;
    }
  }
  keys() {
    return Object.keys(this._set);
  }
  set() {
    return this._set;
  }
  length() {
    return this.keys().length;
  }
  empty() {
    if (this.length() === 0) return true;
    return false;
  }
  contains(elem) {
    return (this._set.hasOwnProperty(elem));
  }
  subset(set) {
    let newSet = new Custom(Object.keys(Object.assign(this._set, set.set())));
    return set.eql(newSet);
  }
  disjoint(set) {
    let disjointNature = true;
    Object.keys(set.set()).forEach(elem => {
      disjointNature = (disjointNature && !this._set.hasOwnProperty(elem));
    });
    return disjointNature;
  }
  eql(set) {
    let check1 = (this.length() === set.length());
    let check2 = true;
    set.keys().forEach(elem => {
      check2 = (check2 && this._set.hasOwnProperty(elem));
    });
    return (check1 && check2);
  }
  add(elem) {
    return new Custom(this.keys().concat(elem));
  }
  intersection(set) {
    let commonItems = [];
    set.keys().forEach(elem => {
      if (this._set.hasOwnProperty(elem)) commonItems.push(elem);
    });
    return new Custom(commonItems);
  }
  difference(set) {
    let commonItems = [];
    this.keys().forEach(elem => {
      if (!set.set().hasOwnProperty(elem)) commonItems.push(elem);
    });
    return new Custom(commonItems);
  }
  union(set) {
    let combinedArr = Object.keys(Object.assign(this._set, set.set()));
    return new Custom(combinedArr);
  }
}

module.exports = Custom;
