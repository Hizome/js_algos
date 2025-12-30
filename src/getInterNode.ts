import { ListNode } from './Node.js';

function getIntersectionNode (headA: ListNode | null, headB: ListNode | null ): ListNode | null {
    let sizeA: number = 0;
    let sizeB: number = 0;
    let curA: ListNode | null = headA;
    let curB: ListNode | null = headB;

    while (curA) { //til the end of A, we only need sizeA
	sizeA++;
	curA = curA.next;
    }

    while (curB) { // til the end of B, we only need sizeB
	sizeB++;
	curB = curB.next;
    }
    curA = headA;
    curB = headB;


    if (sizeA < sizeB) {
	[sizeA, sizeB] = [sizeB, sizeA];
	[curA, curB] = [curB, curA];
    } // we need the longer one 

    let gap = sizeA - sizeB;
    while (gap-- && curA) {
	curA = curA.next;
    }// move the poniter to gap place

    while (curA && curB) {
	if (curA === curB) {
	    return curA;
	}

	curA = curA.next;
	curB = curB.next;
    }

    return null;
}


function detectCyecle(head: ListNode | null): ListNode | null {
    let slowNode: ListNode | null = head;
    let fastNode: ListNode | null = head;

    while (fastNode !== null && fastNode.next !== null) {
	slowNode = slowNode!.next;
	fastNode = fastNode.next.next;

	if (slowNode === fastNode) {
	    slowNode = head;
	    while (slowNode !== fastNode) {
		slowNode = slowNode!.next;
		fastNode = fastNode!.next;
	    }
	}

	return slowNode;
    }


    return null;
}



export { getIntersectionNode, detectCyecle };
