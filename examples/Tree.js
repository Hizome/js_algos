function TreeNode(x) {
	this.val = x;
	this.left = null;
	this.right = null;
}


// tree -> str
function Serialize(pRoot, arr = []) {
	if (!pRoot) {
		arr.push('#');
		return arr;
	} else {
		arr.push(pRoot.val);
		Serialize(pRoot.left, arr);
		Serialize(pRoot.right, arr);
	}
	return arr;
}

// str -> tree

function Deserialize(s) {
	let arr = Array.isArray(s) ? s : s.split("");

	// get val
	let a = arr.shift();

	let node = null;
	if (typeof a === "number") {
		node = new TreeNode(a);
		node.left = Deserialize(arr);
		node.right = Deserialize(arr);
	}
	return node;

}

var preorderTraversal = function(root) {
	let stack = [];
	let res = [];
	let cur = null;

	if(!root) return res;

	root&&stack.push(root);
	while(stack.length) {
		cur = stack.pop();
		res.push(cur.val);
		cur.right&&stack.push(cur.right);
		cur.left&&stack.push(cur.left);
	}
	return res;
}


var preorderTraversal_2 = function(root) {
	const res = [];	
	if (!root) return;
	
	res.push(root.val);
	preorderTraversal_2(root.left);
	preorderTraversal_2(root.right);

}


var inorderTraversal = function(root) {
	let stack = []
	let res = []

	let cur = root
	while (cur || stack.length) {
		if (cur) {
			stack.push(cur)
			cur = cur.left
		} else {
			cur = stack.pop()
			res.push(cur.val)
			cur = cur.right
		}

	}
	return res
}


var postorderTraversal = function(root) {
	let stack = []
	let res = []
	let cur = root


	if(!root) return res

	stack.push(root)

	while(stack.length) {
		cur = stack.pop()
		res = res.push(cur)

		cur.left&&stack.push(cur.left)
		cur.right&&stack.push(cur.right)

	}

	return res.reverse()
}


function levelOrder(root) {
	if (root == null) {
		return [];
	}
	
	const arr = [];
	const queue = [];


	queue.push(root);


	while (queue.length) {
		const preSize = queue.length;
		const floor = [];

		for (let i = 0; i < preSize; i++) {
			const v = queue.shift();
			floor.push(v.val);

		}
	}
}



function deep(left, right) {
	if (!left && !right) {
		return true;
	}  // the finally condition
	if (!right || !left || left.val !== right.val) {return false}

	return deep(left.left, right.right) && deep(left.right, right.left)
}


function isSymmetrical(pRoot) {
	return deep(pRoot)
}


function isCompleteTree(root) {
	if (root === null) return true;

	const queue = [];
	queue.push(root);

	let flag = false;
	while (queue.length) {
		const node = queue.shift();

	}

}


function IsBalanced_Solution(pRoot) {
	

}
