const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const T = input.shift();

for (let i = 0; i < T; i++) {
  arr = input[i].split(' ').map(Number);
  const H = arr[0];
  const W = arr[1];
  const N = arr[2];

  const h = N % H; // 층수
  const w = Math.ceil(N / H); // 호수

  h === 0
    ? // 층수만큼 나누어 떨어질 때 (최고층)
      console.log(H * 100 + w)
    : // 층수 나머지가 있을 때
      console.log(h * 100 + w);
}
