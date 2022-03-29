const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const num = input.shift();
const N = +num.split(' ').map(Number)[0];
let K = +num.split(' ').map(Number)[1];

const arr = [];
let count = 0;

// 역순으로 정렬
for (v of input) {
  arr.push(+v);
}
arr.sort((a, b) => b - a);

for (let i = 0; i < N; i++) {
  // 동전의 가치가 K보다 크면 패스
  if (arr[i] > K) {
    continue;
  } else {
    // 동전의 가치가 K보다 작으면 해당 숫자만큼 뺀 후 count
    while (arr[i] <= K) {
      K -= arr[i];
      count++;
    }
  }
}

console.log(count);
