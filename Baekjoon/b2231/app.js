const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
let M = 0;

for (let i = 1; i <= N; i++) {
  let sum = 0;
  let num = i;

  sum += num;

  // 1의 자리부터 한자리씩 합산
  while (num !== 0) {
    sum += parseInt(num % 10);
    num = parseInt(num / 10);
  }

  // 최소값 or 0 출력
  if (sum === N) {
    M = i;
    break;
  } else {
    M = 0;
  }
}

console.log(M);
