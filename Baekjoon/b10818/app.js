const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const N = input[0]
const num = input[1].split(' ').map(Number)
num.sort((a,b) => a-b)

console.log(num[0], num[N-1])

