export class Queue {
  constructor() {
    this.elements = [];
  }

  enqueue(val) {
    this.elements.push(val);
  }

  dequeue() {
    return this.elements.shift();
  }

  peek() {
    return this.elements[0];
  }

  isEmpty() {
    return this.elements.length === 0;
  }

  size() {
    return this.elements.length;
  }
}
