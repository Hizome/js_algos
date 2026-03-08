function fourSum(A, B, C, D) {
	const map = new Map();
	const n = A.length();

	const index = 0;
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			const sum = A[i] + B[j];

			if (map.has(sum)) {
				map.set(sum, map.get(sum)+1);
			} else {
				map.set(sum, 1);
			}
		}	
	}
	let count = 0;

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (map.has(0-C[i]-D[j])) {
				count += map.get(-C[i]-D[j]);
			}
		}	
	}
	return count;
}
