class Stack {
  constructor() {
    this.items = [];
    this.top = 0; /* treat it like a counter rather than a index */
  }

  push(el) {
    this.items[this.top] = el;
    this.top = this.top + 1;
    return el;
  }
  isEmpty() {
    return this.items.length === 0 ? true : false;
  }

  peek() {
    return this.items[this.top - 1];
  }

  pop() {
    if (!this.isEmpty()) {
      let lastElement = this.items[this.top - 1];
      this.items.splice(-1, 1);
      this.top = this.top - 1;
      return lastElement;
    } else {
      return `the array is empty`;
    }
  }

  getLength() {
    return this.top;
  }

  print() {
    console.log(this);
  }
}

let myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);

console.log(myStack.peek());
myStack.pop();
console.log(myStack.getLength());
console.log(myStack);
