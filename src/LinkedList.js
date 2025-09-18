class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
  }

  // 在头部添加元素
  push(val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
  }

  // 原地反转链表
  reverse() {
    let prev = null;
    let current = this.head;
    while (current !== null) {
      const nextTemp = current.next;
      current.next = prev;
      prev = current;
      current = nextTemp;
    }
    this.head = prev;
  }

  // 打印链表
  toString() {
    let current = this.head;
    let result = '';
    while (current !== null) {
      result += `${current.val} -> `;
      current = current.next;
    }
    return result + 'null';
  }
}
