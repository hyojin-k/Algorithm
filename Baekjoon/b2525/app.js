const fs = require("fs");
const { stringify } = require("querystring");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let A = +input[0].split(" ")[0];
let B = +input[0].split(" ")[1];
let C = +input[1];

A = parseInt((A * 60 + B + C) / 60);
B = parseInt((A * 60 + B + C) % 60);

console.log(A >= 24 ? A - 24 : A, B);

// 결과는 제대로 뜨지만 틀렸습니다 뜸

// let A = +input[0].split(" ")[0];
// let B = +input[0].split(" ")[1];
// let C = +input[1];
// let sum = B + C;
// let a = 0;

// if (sum >= 60) {
//   a = sum / 60;
//   B = sum % 60;
//   A += a;
//   if (A >= 24) {
//     A -= 24;
//   }
//   console.log(A, B);
// } else {
//   console.log(A, sum);
// }
