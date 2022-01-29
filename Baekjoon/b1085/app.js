const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0].split(' ').map(Number)

const x = input[0];
const y = input[1];
const w = input[2];
const h = input[3];

// 내가 한 방식

let result = 0;

x>=y ? result = y : result = x;
Math.abs(x-w) >= result ? result = result : result = Math.abs(x-w);
Math.abs(y-h) >= result ? result = result : result = Math.abs(y-h);

console.log(result)


// 다른 방식

const arr = [x, w-x, y, h-y];
const answer = Math.min(...arr);
console.log(answer)