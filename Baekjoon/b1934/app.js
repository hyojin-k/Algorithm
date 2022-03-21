const { notEqual } = require('assert');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const T = input.shift();

for (let i = 0; i < T; i++) {
  let A = input[i].split(' ').map(Number)[0];
  let B = input[i].split(' ').map(Number)[1];
  let mul = A * B;

  let r = B % A;
  while (r !== 0) {
    B = A;
    A = r;
    r = B % A;
  }

  let result = mul / A;
  console.log(result);
}
