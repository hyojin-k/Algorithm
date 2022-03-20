const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = +input;
let K = 0;
let result = [];

function hanoi(N, A, B, C) {
  if (N === 0) {
    return;
  } else {
    hanoi(N - 1, A, C, B);
    result.push([A, C]);
    K++;
    hanoi(N - 1, B, A, C);
  }
}
hanoi(N, '1', '2', '3');
console.log(K);
console.log(result.map((v) => v.join(' ')).join('\n'));
