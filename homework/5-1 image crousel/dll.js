export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export default class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Push a new value to the tail of the linked list.
   */

  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  /**
   * Remove an item from the end of the linked list.
   */
  pop() {
    if (!this.head) {
      return null;
    }
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.length -= 1;
    return this;
  }

  /**
   * Remove a node from the beginning of the list.
   */
  shift() {
    if (!this.head) return null;
    if (this.length === 1) {
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.length -= 1;
    return this;
  }

  /**
   * Add a node to the head of the linked list.
   */
  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  /**
   * Get a Node at a specific index
   */
  getNodeAtIndex(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    if (index < Math.floor(this.length / 2)) {
      let cur = this.head;
      let counter = 0;
      while (counter < index) {
        cur = cur.next;
        counter++;
      }
      return cur;
    } else {
      let cur = this.tail;
      let counter = this.length - 1;
      while (counter > index) {
        cur = cur.prev;
        counter--;
      }
      return cur;
    }
  }

  /**
   * Set a node at a specific index.
   */
  setNodeAtIndex(index, value) {
    if (!this.getNodeAtIndex(index)) {
      return false;
    } else {
      this.getNodeAtIndex(index).value = value;
      return true;
    }
  }

  /**
   *  Insert a node at a specific index.
   */
  insertAtIndex(index, val) {
    let newNode = new Node(val);
    if (index < 0 || index > this.length) return null;
    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);
    let preNode = this.getNodeAtIndex(index - 1);
    let curNode = preNode.next;
    newNode.next = curNode;
    curNode.prev = newNode;
    preNode.next = newNode;
    newNode.prev = preNode;
    this.length++;
    return this;
  }

  /**
   * Remove a node at a specific index.
   */

  removeAtIndex(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let curNode = this.getNodeAtIndex(index);
    curNode.prev.next = curNode.next;
    curNode.next.prev = curNode.prev;
    curNode.next = null;
    curNode.prev = null;
    this.length--;
    return this;
  }
}
