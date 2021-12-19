const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
solution(+input[0]);

function solution(year) {
  const answer = (year%4===0 && year%100!==0) || (year%4===0 && year%400 === 0) ? 1 : 0

  console.log(answer)
}