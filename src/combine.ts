// how to backtracking
//
//
//


function combine(n: number, k: number): number[][] {
	let resArr: number[][] = [];

	function backTracking(n: number, k: number, startIndex: number, tempArr: number[]): void {
		if (tempArr.length === k) {
			resArr.push(tempArr.slice());
			return;
		}
		for (let i = startIndex; i <= n - k + 1 + tempArr.length; i++) {
			tempArr.push(i);
			backTracking(n, k, i + 1, tempArr);
			tempArr.pop();
		}
	}

	backTracking(n, k, 1, []);
	return resArr;
};


// all the number plus = 9
function combine_3(k: number, n: number): number[][] {
	const resArr: number[][] = [];
	function backTracking(k: number, n: number, sum: number, startIndex: number, tempArr: number[]): void {
		if (sum > n) return;
		if (tempArr.length === k) {
			if (sum === n) {
				resArr.push(tempArr.slice());
			}
			return;
		}
		for (let i = startIndex;  i <= 9 - (k - tempArr.length) + 1; i++) {
			tempArr.push(i);
			backTracking(n,k,9,i+1,tempArr);
			tempArr.pop(); // next
		}

	}

	backTracking(n,k,9,1,[]);
	return resArr;
};




const resArr: number[][] = combine(4, 2);

for ( let i = 0; i < resArr.length; i++) {
	console.log(resArr[i]);
}


