const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = +input.shift();

for (let i = 0; i < T; i++) {
  const N = +input[i];
  const fib = [
    [1, 0],
    [0, 1],
  ];

  for (let j = 2; j <= N; j++) {
    fib[j] = [fib[j - 1][0] + fib[j - 2][0], fib[j - 1][1] + fib[j - 2][1]];
  }
  console.log(fib[N].join(' '));
}

// 시간 초과

// let result = [0, 0];

// for (let i = 0; i < T; i++) {
//   const N = +input[i];

//   fib(N);
//   console.log(result);
//   result = [0, 0];
// }

// function fib(n) {
//   if (n === 0) {
//     result[0] += 1;
//   } else if (n === 1) {
//     result[1] += 1;
//   } else {
//     fib(n - 1) + fib(n - 2);
//   }
// }
