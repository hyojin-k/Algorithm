const { notEqual } = require("assert");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input[0];

let num = 666;
let count = 1;

while (count < N) {
  num++;
  if (String(num).includes("666")) count++;
}

console.log(num);
