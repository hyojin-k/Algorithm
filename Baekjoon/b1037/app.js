const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const count = input.shift();

input = input[0].split(' ').map(Number);
input.sort((a, b) => a - b);

input.length % 2 === 0
  ? console.log(input[0] * input[input.length - 1])
  : console.log(Math.pow(input[Math.ceil(count / 2) - 1], 2));
