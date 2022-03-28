const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const T = +input.shift();
const result = [];

for (let i = 0; i < T; i++) {
  const dp = [...Array(+input[i] + 1)].fill(0);

  dp[1] = 1;
  dp[2] = 1;
  dp[3] = 1;

  for (let j = 4; j < dp.length; j++) {
    dp[j] = dp[j - 3] + dp[j - 2];
  }
  result.push(dp[+input[i]]);
}
console.log(result.join('\n'));
