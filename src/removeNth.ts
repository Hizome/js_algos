import { ListNode } from './Node.js';

function removeNth(head: ListNode | null, n: number): ListNode | null {
	let newHead: ListNode | null = new ListNode(0, head);	
	let slowNode: ListNode | null = newHead;
	let fastNode: ListNode | null = newHead;

	while(n--) {
		fastNode = fastNode?.next!;//fastNode isn't null
	}

	while(fastNode.next) {
		fastNode = fastNode?.next;
		slowNode = slowNode?.next!;
	}

	slowNode.next = slowNode.next!.next;
	return newHead.next;

};

export { removeNth };
