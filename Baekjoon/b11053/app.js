const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const N = +input.shift();

input = input[0].split(' ').map(Number);

const dp = [...Array(N)].fill(1);

for (let i = 1; i < N; i++) {
  const arr = [1];
  // i인덱스 숫자와 이전의 숫자들 전부 비교
  for (let j = 0; j < i; j++) {
    if (input[i] > input[j]) {
      // 증가하는 부분일때만 push
      arr.push(dp[j] + 1);
    }
  }
  dp[i] = Math.max(...arr);
}
console.log(Math.max(...dp));

// 실패

// const A = +input.shift();
// input = input[0].split(' ').map(Number);
// let arr = [input[0]];

// for (let i = 0; i < A; i++) {
//   if (input[i + 1] > input[i]) {
//     arr.push(input[i + 1]);
//   }
// }
// console.log(arr.length);
