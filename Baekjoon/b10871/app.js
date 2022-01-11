const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");


const num1 = input[0].split(' ').map(Number)
const num2=input[1].split(' ').map(Number)

const N = num1[0];
const X = num1[1];
let result = '';

for(let i = 0; i<N;i++){
    if(num2[i]<X) result += num2[i] +' '
}

console.log(result)