class Queue {
  constructor() {
    this.items = [];
    this.size = 0;
  }

  enqueue(el) {
    this.items.push(el);
    this.size++;
    return this;
  }

  getLength() {
    return this.size;
  }

  dequeue() {
    if (this.size === 0) {
      return null;
    } else {
      this.items.shift();
      this.size--;
      return this;
    }
  }

  getFront() {
    return this.items[0];
  }

  getLast() {
    return this.size !== 0 ? this.items[this.size - 1] : null;
  }

  isEmpty() {
    return this.size === 0 ? true : false;
  }

  print() {
    console.log(this);
  }
}

let myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.dequeue();
console.log(myQueue.isEmpty());
console.log(myQueue.getLast());
console.log(myQueue.getFront());

console.log(myQueue);
