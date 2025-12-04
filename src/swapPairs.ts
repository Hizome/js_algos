import { ListNode } from './Node.js';

function swapPairs(head: ListNode | null): ListNode | null {
	const dummyNode: ListNode = new ListNode(0, head);
	let curNode: ListNode | null = dummyNode;
	while (curNode && curNode.next && curNode.next.next) {
		let firstNode: ListNode = curNode.next;
		let secNode: ListNode = curNode.next.next;
		let thirdNode: ListNode | null = curNode.next.next.next;

		curNode.next = secNode;
		secNode.next = firstNode;
		firstNode.next = thirdNode;

		curNode = firstNode;
	}

	return dummyNode.next;
};

export { swapPairs };
