import { ListNode } from './Node.js';

export function removeElements(head: ListNode | null, val: number): ListNode | null {
	// if head not null and head value is the value
	// we can just delete head
	while (head !== null && head.val === val) {
		head = head.next;
	}
	if (head === null) return head;
	let pre: ListNode = head, cur: ListNode | null = head.next;
	while (cur) {
		if (cur.val === val) {
			pre.next = cur.next;
		} else {
			pre = pre.next as ListNode;
		}

		cur = cur.next;
	}
	return head;
}

export function removeElement2(head: ListNode | null, val: number): ListNode | null {
	const data = new ListNode(0, head);
	let pre = data, cur = data.next;
	while (cur) {
		if (cur.val === val) {
			pre.next = cur.next;
		} else {
			pre = cur;
		}

		cur = cur.next;
	}

	return data.next;
}
