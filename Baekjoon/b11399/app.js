const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const N = +input.shift();
input = input[0].split(' ').map(Number);
input.sort((a, b) => a - b);

let sum = 0;

for (let i = 0; i < N; i++) {
  sum += input[i] * (N - i);
}

console.log(sum);
