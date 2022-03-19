const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const num = input.shift().split(' ').map(Number);
const N = num[0];
const M = num[1];

// 이분탐색

const tree = input[0]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

let start = 0;
let end = tree[N - 1];

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let sum = 0;

  for (let t of tree) {
    if (t > mid) {
      sum += t - mid;
    }
  }

  sum >= M ? (start = mid + 1) : (end = mid - 1);
}
console.log(end);

// 실패

// const tree = input[0]
//   .split(' ')
//   .map(Number)
//   .sort((a, b) => b - a);

// let count = 0;
// let result = [];

// for (let i = 0; i < N; i++) {
//   while (count < M) {
//     if (tree[i] > tree[i + 1]) {
//       tree[i]--;
//       count += i + 1;
//       //   console.log(i, tree[i]);
//       //   console.log('count', count);
//       //   console.log(tree[i]);
//       result.push(tree[i]);
//     } else {
//       break;
//     }
//   }
// }

// console.log(result[result.length - 1]);
