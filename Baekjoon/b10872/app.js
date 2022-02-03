const fs = require('fs');
const { stringify } = require('querystring');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split("\n");

const N = +input[0]

function f(n){
    if(n === 0){
        return 1;
    }
    return n * f(n-1) 
}
console.log(f(N))
