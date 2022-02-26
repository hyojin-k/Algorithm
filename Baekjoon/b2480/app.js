const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

const a = input[0];
const b = input[1];
const c = input[2];

// 문제 풀이 1

if (a === b) {
  if (b === c) {
    console.log(10000 + a * 1000);
  } else {
    console.log(1000 + a * 100);
  }
} else if (b === c) {
  console.log(1000 + b * 100);
} else {
  console.log(a * 100);
}

// 문제 풀이 2

if (a === b && b === c) {
  console.log(10000 + a * 1000);
} else if (a === b || b === c) {
  console.log(1000 + b * 100);
} else {
  console.log(a * 100);
}
