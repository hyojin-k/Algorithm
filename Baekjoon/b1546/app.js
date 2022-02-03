const fs = require('fs');
const { stringify } = require('querystring');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split("\n");

const N = +input[0]
const num = input[1].split(' ').map(Number)
const numMax = num.sort((a,b) => a-b)[N-1]
let sum = 0;

for(let i = 0; i<N; i++){
    const newNum = num[i]/numMax *100;
    sum += newNum;
}

console.log(sum/N)