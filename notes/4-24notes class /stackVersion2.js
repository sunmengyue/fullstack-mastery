class Stack {
  constructor() {
    this.items = [];
    this.top = 0; /* treat it like a counter/size rather than a index */
  }

  push(el) {
    this.items.splice(0, 0, el);
    this.top = this.top + 1;
    return el;
  }

  isEmpty() {
    return this.top === 0 ? true : false;
  }

  peek() {
    return this.items[0];
  }

  pop() {
    if (!this.isEmpty()) {
      let lastElement = this.items[0];
      this.items.splice(0, 1);
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
myStack.pop();
myStack.print();
