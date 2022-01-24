const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const A = input[0];
const B = input[1];
const C = input[2];
const num = String(A*B*C);

for(let i = 0; i<=9; i++){
    let count = 0;

    for(let j =0; j<num.length; j++){
        num[j] == i && count++;
    }
console.log(count)
}
