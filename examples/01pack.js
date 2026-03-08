function knapsack01(capacity, weights, values) {
	const n = weights.length;


	// dp[i][j] show that the former ith item, cap is j, 
	// dp = the maxvalue in the moment.
	const dp = Array.from({ length: n+1}, () => Array(capacity + 1).fill(0));

	for (let i = 1; i <= n; i++) { // 这是实际上从0开始是对的，从1开始有点问题
		const weight = weights[i - 1];
		const value = values[i - 1];


		// 遍历背包
		for (let j = 0; j <= capacity; j++) {
			if (j < weight) {
				// 装不下当前
				dp[i][j] = dp[i - 1][j]
			} else {
				// 比较装和不装哪个价值更大
				// dp[i-1][j] 不装
				// dp[i-1][j-weight] + value 装,扣除了当前的weight
				dp[i][j] = Math.max(
				dp[i-1][j],
				dp[i-1][j-weight] + value);
			}
		}
	}
}

/**
 * 0-1背包 - 一维数组优化
 * 关键：容量从大到小遍历，防止重复使用物品
 */
function knapsack01Optimized(capacity, weights, values) {
    const n = weights.length;
    
    // dp[j] 表示容量为j时的最大价值
    const dp = Array(capacity + 1).fill(0);
    
    for (let i = 0; i < n; i++) {
        const weight = weights[i];
        const value = values[i];
        
        // 必须从大到小遍历，保证每个物品只选一次
        for (let j = capacity; j >= weight; j--) {
            dp[j] = Math.max(
                dp[j],                    // 不选
                dp[j - weight] + value     // 选
            );
        }
        
        // 打印每一步的状态（调试用）
        console.log(`考虑物品${i}(重量${weight},价值${value}):`, [...dp]);
    }
    
    return dp[capacity];
}


// 完全背包
//
function complete(capacity, weight, values) {
	const n = weight.length;

	const dp = Array(capacity + 1).fill(0);


	for (let i = 0; i < n; i++) {
		const w = weights[i];
		const v = values[i];

		for (let j = w; j <= capacity; j++) {
			dp[j] = Math.max(
				dp[j],         // 不选
				dp[j - w] + v  // 选
			);
		}

	}

	return dp[capacity];

}
