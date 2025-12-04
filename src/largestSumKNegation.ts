function largestSumAfterNegations(nums: number[], k:number): number {
    nums.sort((a,b) => Math.abs(b) - Math.abs(a));
    // here is bigger - smaller
    for (let i: number = 0; i < nums.length; i++) {
	if (nums[i] < 0 && k > 0) {
	    nums[i] *= -1;
	    k--;
	}
    }

    if (k%2 > 0) { nums[nums.length - 1] *= -1;}

    return nums.reduce((pre, cur) => pre + cur, 0);
};

export { largestSumAfterNegations };
