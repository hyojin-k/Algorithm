const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const num = input[0].split(' ').map(Number);

const A = num[0];
const B = num[1];

const a = (A%10)*100 + parseInt((A%100)/10)*10 + parseInt(A/100);
const b = (B%10)*100 + parseInt((B%100)/10)*10 + parseInt(B/100);

a>b ? console.log(a) : console.log(b)