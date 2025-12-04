//1, ensure dp and index
//2, ensure detiveced equation
//3, how to init dp
//4, what order we need to chose
//5, run dp!


// this is a one-dim example
function fib(N: number): number {
    const dp: number[] = [];
    dp[0] = 0;
    dp[1] = 1;

    for (let i = 2; i <= N; i++) {
	dp[i] = dp[i-1] + dp[i-2];
    }

    return dp[N];
}

export { fib };
