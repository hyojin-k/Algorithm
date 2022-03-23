const fs = require('fs');
const { stringify } = require('querystring');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input.shift();
const arr = Array(n)
  .fill()
  .map((v, i) => i + 1);

let stack = [];
let result = '';

for (let i = 0; i < n; i++) {
  let count = 1;
  // 숫자가 같아질때까지 push
  while (count <= n && stack[stack.length - 1] != input[i]) {
    stack.push(arr.shift());
    result += '+\n';
    count++;
  }

  // 숫자가 같아지면 pop
  if (stack[stack.length - 1] == input[i]) {
    stack.pop();
    result += '-\n';
  } else {
    result = 'NO';
    break;
  }
}

console.log(result);
