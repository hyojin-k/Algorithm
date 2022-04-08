const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();

input = input.map((v) => v.trim().split(' '));

const dp = Array.from(new Array(N), () => new Array());
dp[0].push(Number(input[0][0]));

if (N > 1) {
  for (let i = 1; i < N; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (j === 0) {
        // 왼쪽 끝
        dp[i].push(Number(dp[i - 1][j]) + Number(input[i][j]));
      } else if (j === i) {
        // 오른쪽 끝
        dp[i].push(Number(dp[i - 1][j - 1]) + Number(input[i][j]));
      } else {
        // 가운데
        dp[i].push(
          Math.max(Number(dp[i - 1][j - 1]), Number(dp[i - 1][j])) +
            Number(input[i][j]),
        );
      }
    }
  }
}
console.log(Math.max(...dp[N - 1]));
