class Stack {
  constructor() {
    this.top = 0;
    this.elements = [];
  }

  push(value) {
    this.elements[this.top] = value;
    this.top = this.top + 1;
    return value;
  }

  pop() {
    if (!this.isEmpty) {
      let lastEl = this.elements[this.top - 1];
      this.elements.splice(-1, 1);
      this.top = this.top - 1;
      return lastEl;
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
