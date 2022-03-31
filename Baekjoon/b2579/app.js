const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map(Number);

const N = +input[0];
const dp = Array(N).fill(0);

// 1,2,3 계단
dp[1] = input[1];
dp[2] = dp[1] + input[2];
dp[3] = Math.max(input[1], input[2]) + input[3];

// 4계단 이상
for (let i = 4; i <= N; i++) {
  dp[i] = Math.max(dp[i - 3] + input[i - 1] + input[i], dp[i - 2] + input[i]);
}

console.log(dp[N]);