const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const N = +input[0];
let sum = 0;

for(let i =0; i<N; i++){
    const num = +input[1][i];
    sum += num;
}
console.log(sum)