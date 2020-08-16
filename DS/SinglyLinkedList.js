// Objectives
// - Define what a Singly List is
// - Compare and Contrast Linked List with Arrays
// - Implement Insertion, Removal and traversal Methods on Singly Linked List

// Linked List
// A data structure that contains, head, tail and length property
// Linked List consist of Nodes and each node has a value and a pointer to another node or nulll

// Comparison with arrays

// Lists
// - Do not have indices
// - Connected via a node with a next pointer
// - Random access is not allowed
// - They are good at insertion and deletion

//Arrays
// - Indexed in order
// - Insertion and deletion can be expensive
// - Can quickly be accessed as a specific indexx

// val - piece of data
// next - reference to the next node

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
  push(val) {}
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}
