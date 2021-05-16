class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return newNode;
    } else {
      traverse(this.root);
    }

    function traverse(root) {
      if (newNode.val < root.val) {
        if (root.left === null) {
          root.left = newNode;
        } else {
          traverse(root.left);
        }
      } else if (newNode.val > root.val) {
        if (root.right === null) {
          root.right = newNode;
        } else {
          traverse(root.right);
        }
      } else {
        return undefined;
      }
    }

    return this;
  }

  find(val) {
    function traverse(node) {
      if (node === null) return null;
      if (val < node.val) {
        return traverse(node.left);
      } else if (val > node.val) {
        return traverse(node.right);
      } else {
        return node;
      }
    }

    return traverse(this.root);
  }

  remove(val) {
    // helper function
    function deleteNode(root) {
      if (root === null) return null; //base case 1
      if (val === root.val) {
        if (!root.left && !root.right) {
          // 1. has no children
          root = null;
          return root;
        } else if (root.left && !root.right) {
          root = root.left;
          return root;
        } else if (root.right && !root.left) {
          root = root.right;
          return root;
        } else if (root.right && root.left) {
          let leftBranch = root.left;
          root = root.right;
          let leaf = traverseToRightLeaf(root);
          leaf.left = leftBranch;
          return root;
        }
      } else {
        if (val < root.val) {
          root.left = deleteNode(root.left);
          return root;
        } else {
          root.right = deleteNode(root.right);
          return root;
        }
      }
    }

    function traverseToRightLeaf(root) {
      let cur = root;
      while (cur.left) {
        cur = cur.left;
      }
      return cur;
    }

    deleteNode(this.root);
    return this;
  }
}

let myBST = new BST();
myBST.insert(3);
myBST.insert(10);
myBST.insert(9);
myBST.insert(1);
myBST.insert(0.5);
myBST.find(0.5);
