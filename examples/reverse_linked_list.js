// 从我们的库中导入 LinkedList
import { LinkedList } from '../src/index.js';

function main() {
  // 创建一个新的链表
  const list = new LinkedList();

  // 添加一些元素
  list.push(1);
  list.push(2);
  list.push(3);
  list.push(4);

  // 打印原始链表
  console.log('Original list:', list.toString());

  // 反转链表
  list.reverse();

  // 打印反转后的链表
  console.log('Reversed list:', list.toString());
}

main();
