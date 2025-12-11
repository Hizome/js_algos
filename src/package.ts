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

// in compelete package, because you can put mutiable item
// so you should find i-1(that means item i not put)
// you should find just i (max seconde pararmeter)
function packageCompelete(value: number[], weight: number[], volume: number): number {
    const dp = Array(volume-1).fill(0)
	.map(() => Array(weight.length).fill(0));
    // if you could put same item in i=0, just put all the way
    for (let j = weight[0]; j <= volume; j++) {
	dp[0][j] = dp[0][j - weight[0]] + value[0];
    }

    // order is fine
    for (let i = 1; i < value.length; i++) {
	for (let j = 0; j <= volume; j++) {
	    if (j < weight[i]) dp[i][j] = dp[i-1][j];
	    else dp [i][j] = Math.max(dp[i-1][j], dp[i][j - weight[i]]+ value[i]);
	}
    }

    for (let i = 0; i < value.length; i++) {
	for ( let j = 0; j < volume+1; j++) {
	    console.log(dp[i][j]);
	}
    }
    // It seems like the 2-dim we create is dynamic,
    // even if i just create with width = volume
    //still can print volume + 1
    
    return dp[weight.length-1][volume];
};



export { packge01, packageCompelete };
