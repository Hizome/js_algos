// there's a package which can fill weight W,
// the ith item with weight[i], value[i], each item use only 1
// we need to find how to get max value


// item-package_volume
// dp -> itemNumber-volume connnect with weight,value
// For weight, it's discrete, for j every position have a value
// max (without item N same j, replace item[i])
// It's impossible to have half item
// for 2-dim dp[i][j] = max(dp[i-1][j], dp[i-1][j-weight[i]]+value[i])
// Because for every item there only one "put"
// So each array "put" only one time , other is "copy" value
// 1-dim pd[j] = max(dp[j], dp[j-weight[i]] + value[i])

// the  difference is running order and i,j order
// dim-1 back -> front , because the dp[back] is based on dp[fron], dp[front] would be 0 in begin.
// dim-2 front->back or back->front all ok, becuase dp[i][back] based on dp[i-1][front], it wont effect.

// dim-1 must item-volume order
function packge01(value: number[], weight: number[], volume: number): number {
    // value.length = weight.length = item_nubmer
    const dp = Array(volume+1).fill(0);
    for (let i: number = 0; i < value.length; i++) {
	for (let j: number = volume; j >= weight[i]; j-- ) {
	    dp[j] = Math.max(dp[j], dp[j-weight[i]]+value[i]);
	}
    };
    // every j just do one push
    // the other is cloning
    return dp[volume];
};

export { packge01 };
