const fs = require('fs');
const { stringify } = require('querystring');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const K = +input.shift();

let arr = [];

for (let i = 0; i < K; i++) {
  if (+input[i] !== 0) {
    arr.push(+input[i]);
  } else {
    arr.pop();
  }
}

console.log(arr[0] ? arr.reduce((a, b) => a + b) : 0);
