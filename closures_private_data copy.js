function makeList() {
  _list = [];
  return {
    add(item) {
      _list.push(item);
      console.log(`${item} added`);
    },
    remove(item) {
      let index = _list.indexOf(item);
      let removalItem;
      if (index >= 0) removalItem = _list.splice(index, 1);
      console.log(`${removalItem} removed!`);
    },
    list() {
      _list.forEach(item => console.log(item));
    }
  }
}
let list = makeList();
list.add("peas");
list.list();
list.add("corn");
list.list();
list.remove("peas");
list.list();
