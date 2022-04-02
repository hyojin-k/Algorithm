const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const num = input.shift();
const [N, C] = num.split(' ').map(Number);
input = input.sort((a, b) => a - b).map(Number);

let start = 1;
// 가장 멀리 떨어져 있는 거리
let end = input[input.length - 1] - input[0];

let mid = 0;
let result = 0;

while (start <= end) {
  mid = Math.floor((start + end) / 2);
  let value = input[0];
  let count = 1;

  // 해당 거리만큼 설치할 수 있는 공유기 갯수 count
  for (let i = 1; i < N; i++) {
    if (input[i] >= value + mid) {
      value = input[i];
      count++;
    }
  }

  if (count >= C) {
    // 공유기의 갯수가 더 많으면 간격을 늘리기
    // 공유기의 갯수가 같으면 최대값을 구하고 출력
    start = mid + 1;
    result = mid;
  } else {
    // 공유기의 갯수가 더 적으면 간격을 좁히기
    end = mid - 1;
  }
}

console.log(result);
