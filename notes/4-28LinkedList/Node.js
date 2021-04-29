class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

let node1 = new Node(1);
let node2 = new Node(2);

node1.next = node2;

console.log(node1);
