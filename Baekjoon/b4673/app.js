const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

// 1~10000 담긴 배열
let arr = Array(10000)
  .fill()
  .map((v, i) => i + 1);

for (let i = 1; i < 10000; i++) {
  let sum = 0;
  let num = i;

  sum += num;

  while (num !== 0) {
    sum = sum + parseInt(num % 10);
    num = parseInt(num / 10);
  }

  // sum으로 나온 값은 생성자를 가진 숫자
  // 해당 숫자들을 제거한 셀프 넘버만 담긴 배열 출력
  if (arr.includes(sum)) {
    arr = arr.filter((v) => v !== sum);
  }
}
console.log(arr.join('\n'));
