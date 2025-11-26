import { ListNode } from './Node.js';

// 创建链表节点
console.log('=== 测试 ListNode 类 ===\n');

// 创建单个节点
const node1 = new ListNode(1);
console.log('节点1:', { val: node1.val, next: node1.next });

// 创建链表: 1 -> 2 -> 3 -> null
const node2 = new ListNode(2);
const node3 = new ListNode(3);
node1.next = node2;
node2.next = node3;

console.log('\n创建链表: 1 -> 2 -> 3 -> null');

// 遍历链表
function printList(head: ListNode | null): void {
  const values: number[] = [];
  let current = head;
  while (current !== null) {
    values.push(current.val);
    current = current.next;
  }
  console.log('链表值:', values.join(' -> '));
}

printList(node1);

// 测试链表长度计算
function getListLength(head: ListNode | null): number {
  let count = 0;
  let current = head;
  while (current !== null) {
    count++;
    current = current.next;
  }
  return count;
}

console.log('链表长度:', getListLength(node1));

// 测试查找节点
function findNode(head: ListNode | null, value: number): ListNode | null {
  let current = head;
  while (current !== null) {
    if (current.val === value) {
      return current;
    }
    current = current.next;
  }
  return null;
}

const foundNode = findNode(node1, 2);
console.log('\n查找值为 2 的节点:', foundNode ? `找到了，值为 ${foundNode.val}` : '未找到');

console.log('\n✅ 测试完成！');
