class Stack {
  constructor() {
    this.top = 0;
    this.elements = [];
  }

  push(value) {
    this.elements[this.top] = value;
    this.top = this.top + 1;
    console.log(this.elements);
    return value;
  }

  pop() {
    if (!this.isEmpty()) {
      this.top = this.top - 1;
      return this.elements.splice(-1)[0];
    } else {
      return 'The stack is empty';
    }
  }

  isEmpty() {
    return this.top === 0;
  }

  clear() {
    this.elements = [];
    return this.elements;
  }
}

export default Stack;
