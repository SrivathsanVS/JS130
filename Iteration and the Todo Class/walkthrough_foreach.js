class Foo {
  constructor(prefix) {
    this.prefix = prefix;
  }

  showItem(item) {
    console.log(this.prefix, item);
  }
}

function forEach(array, callback, context=this) {
  for (let index = 0; index < array.length; index += 1) {
    callback.call(context, index, array[index]);
  }
}
let foo = new Foo("Item: ");
forEach([1, 2, 3], foo.showItem, foo);
