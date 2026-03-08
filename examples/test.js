console.log('hi')

function TwoSum(target, num) {
	const map = new Map();

	for (let i = 0; i < num.length(); i++) {
		const comp = target - num[i];

		if (map.has(comp)) { return map.get(comp), i;}
		map.set(nums[i], i);
	}
	// we actually need index i;
	// which is also the index of num
	return [];

}
