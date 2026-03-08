function ListNode(x) {
	this.val = x;
	this.next = null;
}


function hasCycle(head) {
	if (!head || !head.next) {return false}
	let fast = head.next;
	let slow = head;
	//set up	

	while (slow !== fast) {
		if (!fast || !fast.next) {
		return false;
	}

	fast = fast.next.next;
	slow = slow.next;
	}

	return true;

}


