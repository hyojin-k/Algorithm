const fs = require('fs');
const { stringify } = require('querystring');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split("\n");

const N = +input[0]

function f(n){
    if(n === 0) return 0;
    if(n === 1 || n === 2) return 1;
    return f(n-1) + f(n-2);
}
console.log(f(N))