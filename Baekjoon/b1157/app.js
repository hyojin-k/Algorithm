const fs = require("fs");
const { stringify } = require("querystring");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0].toUpperCase();
let word = "";
let arr = [];

if (input.length === 1) {
  console.log(input[0]);
} else {
  while (input.length > 0) {
    if (word.includes(input[0])) {
      // 문자가 중복 될 경우
      const idx = word.indexOf(input[0]);
      arr[idx][1]++;
      input = input.substr(1);
    } else {
      // 문자 중복이 없는 경우
      arr.push([input[0], 1]);
      word += input.substr(0, 1);
      input = input.substr(1);
    }
  }
  arr.sort((a, b) => b[1] - a[1]);

  arr[0][1] === arr[1][1] ? console.log("?") : console.log(arr[0][0]);
}
