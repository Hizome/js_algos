import { ListNode } from './Node.js';


function reverseList(head: ListNode | null): ListNode | null {
    let preNode: ListNode | null = null,
        curNode: ListNode | null = head,
        tempNode: ListNode | null;
    while (curNode) {
        tempNode = curNode.next;
        curNode.next = preNode;
        preNode = curNode;
        curNode = tempNode;
    }
    return preNode;
};
// front-back
function reverserList2(head: ListNode | null): ListNode | null{
    function recur(preNode: ListNode | null, curNode: ListNode | null): ListNode | null {
		if (curNode === null) return preNode;
		let tempNode: ListNode | null = curNode.next;
		curNode.next = preNode;
		preNode = curNode;
		curNode = tempNode;
		return recur(preNode, curNode);
    }
    return recur(null, head);
};

//back-front
function reverseList3(head: ListNode | null): ListNode | null {
	if (head === null) return null;
	let newHead: ListNode | null = null;

	function recur(node: ListNode | null, preNode: ListNode | null): void {
		if (node !== null && node.next === null) {// the last element
			newHead = node;
			newHead.next = preNode;
		} else if (node !== null) {// will run this part of logic untill last
			recur(node.next, node);
			node.next = preNode;
		}
	}
	recur(head, null);
	return newHead;
};

export {reverseList, reverserList2};




