function newStack() {
  let stack = [];
  return {
    push: (elem) => stack.push(elem),
    pop: () => stack.pop(),
    printStack: () => console.log(stack)
  };
}

// Test
let stack = newStack();
stack.push(2);
stack.push(3);
stack.printStack();
stack.pop();
stack.printStack();
