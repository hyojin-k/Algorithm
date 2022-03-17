const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = +input.shift();

for (let i = 0; i < T; i++) {
  arr = input[i].split(' ').map(Number);
  const x = arr[0];
  const y = arr[1];
  const dis = y - x;

  let big;
  let small;
  let result;

  if (Math.sqrt(dis) % 1 === 0) {
    // dis가 제곱수일때
    result = Math.sqrt(dis) * 2 - 1;
  } else {
    // dis가 제곱수가 아닐때
    big = Math.pow(Math.ceil(Math.sqrt(dis)), 2); // dis보다 큰 제곱수
    small = Math.pow(Math.ceil(Math.sqrt(dis)) - 1, 2) + 1; //dis 바로 아래 제곱수 +1

    if ((big + small) / 2 <= dis) {
      result = Math.ceil(Math.sqrt(dis)) * 2 - 1;
    } else {
      result = Math.ceil(Math.sqrt(dis)) * 2 - 2;
    }
  }

  console.log(result);
}
