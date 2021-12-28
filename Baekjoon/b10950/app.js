const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const T = +input[0]

for(let i = 1; i <= T;i ++){
    let num = input[i].split(' ').map(Number)
    console.log(num[0]+num[1])
}