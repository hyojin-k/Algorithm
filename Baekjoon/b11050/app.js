const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const N = input[0].split(' ').map(Number)[0];
const K = input[0].split(' ').map(Number)[1];

let n = 1;
let k = 1;
let nk = 1;
for (let i = 1; i <= N; i++) {
  n *= i;
}
for (let i = 1; i <= K; i++) {
  k *= i;
}
for (let i = 1; i <= N - K; i++) {
  nk *= i;
}

const result = n / (nk * k);

console.log(result);

// 실패

// const n = Array(N)
//   .fill()
//   .map((v, i) => i + 1)
//   .reduce((a, b) => a * b);
// const k = Array(K)
//   .fill()
//   .map((v, i) => i + 1)
//   .reduce((a, b) => a * b);
// const nk = Array(N - K)
//   .fill()
//   .map((v, i) => i + 1)
//   .reduce((a, b) => a * b);

// const result = n / (nk * k);

// console.log(result);
