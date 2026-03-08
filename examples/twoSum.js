// 输入：
// 9
// -2 1 -3 4 -1 2 1 -5 4
// 输出：
// 6

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const lines = [];

rl.on('line', (line) => {
    lines.push(line);
}).on('close', () => {
    const n = parseInt(lines[0]);
    const nums = lines[1].split(' ').map(Number);
    
    let maxSum = nums[0];
    let currentSum = nums[0];
    
    for (let i = 1; i < n; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    
    console.log(maxSum);
});
