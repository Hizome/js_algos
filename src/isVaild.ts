function isValid(s: string): boolean {
    let helperStack: string[] = [];
    for (let i = 0, length = s.length; i < length; i++) {
	let x: string = s[i];
	switch(x){
	    case '(':
		helperStack.push(')');
		break;
	    case '{':
		helperStack.push('}');
		break;
	    case '[':
		helperStack.push(']');
		break;
	    default:
		if (helperStack.pop() !== x) return false;
		// compare that if the stacktop === s[i]
		break;
	}
    }

    return helperStack.length === 0;
};


function removeDuplicates(s: string): string {
    const helperStack: string[] = [];
    let i: number = 0;
    while (i < s.length) {
	let top: string = helperStack[helperStack.length - 1];
	if (top === s[i]) {
	    helperStack.pop();
	} else {
	    helperStack.push(s[i]);
	}

	i++;
    }

    let res: string = '';
    while (helperStack.length > 0) {
	res = helperStack.pop() + res;
    }

    return res;

};

//1. 新元素入队时：
//   - 从队尾开始，移除所有小于新元素的值
//   - 将新元素加入队尾
//
//2. 窗口滑动时：
//   - 检查队头元素是否已经滑出窗口
//   - 如果滑出，移除队头
//
//3. 获取最大值：
//   - 队头元素就是当前窗口的最大值
//
function maxSlidingWindow(nums: number[], k: number): number [] {
    class MonoQueue {
	private queue: number[];
	constructor() {
	    this.queue = [];
	};

	public enqueue(value: number): void {
	    let back: number | undefined = this.queue[this.queue.length-1];
	    while (back !== undefined && back < value) {
		this.queue.pop();
		back = this.queue[this.queue.length-1];
	    }
	    this.queue.push(value);
	};

	public dequeue(value: number): void {
	    let top: number | undefined = this.top();
	    if (top !== undefined && top === value) {
		this.queue.shift();
	    }
	};

	public top(): number | undefined {
	    return this.queue[0];
	}
    }

};





//const res: string = removeDuplicates('abbaca');
//console.log(res);
