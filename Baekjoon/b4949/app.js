const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const open = ['(', '['];
const close = [')', ']'];
let stack;
const result = [];

// 종료표시 . 제거
input.pop();

input.forEach((v) => {
  let isNo = false;
  stack = [];

  for (let i = 0; i < v.length; i++) {
    if (open.includes(v[i])) {
      // 여는 괄호 push
      stack.push(v[i]);
    } else if (close.includes(v[i])) {
      // 여는 괄호, 닫는 괄호 짝이 맞는지 확인
      if (stack.pop() !== open[close.indexOf(v[i])]) {
        result.push('no');
        isNo = true;
        break;
      }
    }
  }

  if (!isNo) {
    if (stack.length === 0) {
      // stack이 비었으면 짝이 맞음
      result.push('yes');
    } else {
      // stack에 여는 괄호가 남았으면 짝이 안맞음
      result.push('no');
    }
  }
});

console.log(result.join('\n'));
