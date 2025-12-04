function maxProfit(prices: number[]): number {
    let proNums: number = 0;
    for (let i: number = 0; i < prices.length - 1; i++) {
	proNums += Math.max(prices[i+1] - prices[i],0);
    }

    return proNums;
}

function maxProfit2(prices: number[]): number {
    const dp = Array(prices.length).fill(0)
	.map(() => Array(2).fill(0));

  
    
}

export { maxProfit };
