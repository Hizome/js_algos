export class Stack {
  constructor() {
    this.elements = [];
  }

  push(val) {
    this.elements.push(val);
  }

  pop() {
    return this.elements.pop();
  }

  peek() {
    return this.elements[this.elements.length - 1];
  }

  isEmpty() {
    return this.elements.length === 0;
  }

  size() {
    return this.elements.length;
  }
}
