const fs = require('fs');
const { stringify } = require('querystring');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0].split(' ');
let result = input.length

if(input[0] === '') result -= 1
if(input[input.length-1] === '')  result -= 1

console.log(result)
