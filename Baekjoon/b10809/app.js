const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0]
const eng = 'abcdefghijklmnopqrstuvwxyz'
let index = ''
let result = []

for(let i = 0; i<eng.length;i++){
    index = input.indexOf(eng[i]);
    result.push(index);   
}
console.log(result.join(' '))