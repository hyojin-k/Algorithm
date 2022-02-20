const fs = require("fs");
const { stringify } = require("querystring");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = input[0].split(" ").map(Number);

const A = input[0];
const B = input[1];
const C = input[2];

const N = A / (C - B);
const result = Math.floor(N) + 1;

console.log(B >= C ? -1 : result);

// let i = 1;
// if (B > C) {
//   console.log(-1);
//   return;
// }
// while (A + B * i > C * i) {
//   i++;
// }

// console.log(i + 1);
