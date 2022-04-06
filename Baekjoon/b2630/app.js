const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input[0];
input = input.slice(1).map((v) => v.split(' ').map((w) => +w));

const solution = (n) => {
  // 흰색, 파란색
  const count = [0, 0];

  const func = (n, x, y) => {
    let total = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        // 분할된 종이 숫자 합
        total += input[y + j][x + i];
      }
    }

    if (total === 0) {
      // 흰색 count
      count[0]++;
    } else if (total === n * n) {
      // 파란색 count
      count[1]++;
    } else {
      // 제곱수가 아니면 종이 분할
      n /= 2;
      func(n, x, y);
      func(n, x + n, y);
      func(n, x, y + n);
      func(n, x + n, y + n);
    }
  };
  func(n, 0, 0);
  console.log(count.join('\n'));
};

solution(n);
