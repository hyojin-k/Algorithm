const { notEqual } = require("assert");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = input[0]
console.log(input.split('').map(Number).sort((a,b) => b-a).join(''))