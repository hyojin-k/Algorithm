const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = +input[0];

solution(input);

function solution(num) {
  let newNum = 0;
  let sum = 0;
  let count = 0;

  // 기존 숫자가 0일 경우 무조건 1을 반환하고 리턴
  if (num === 0) {
    newNum === num;
    console.log(1);
    return;
  }

  // 기존 숫자가 새로운 숫자와 같아질때까지 동작
  while (num !== newNum) {
    //  처음 시작할때
    if (newNum === 0) {
      if (num < 10) {
        sum = num;
        newNum = num * 10 + num;
        count++;
      } else {
        sum = parseInt(num / 10) + (num % 10);
        newNum = (num % 10) * 10 + (sum % 10);
        count++;
      }
    }

    // 한바퀴 돌고 난 후, newNum으로 사이클 돌기
    else if (newNum !== 0 && newNum < 10) {
      sum = newNum;
      newNum = newNum * 10 + newNum;
      count++;
    } else {
      sum = parseInt(newNum / 10) + (newNum % 10);
      newNum = (newNum % 10) * 10 + (sum % 10);
      count++;
    }
  }
  console.log(count);
}
