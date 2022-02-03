const fs = require('fs');
const { stringify } = require('querystring');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split("\n");

for(arr of input){
    arr = arr.split(' ').map(Number)
    arr.sort((a,b) => a-b);
    const a = arr[0];
    const b = arr[1];
    const c = arr[2];

    if(a === 0) break;

    a**2 + b**2 === c**2 ? console.log('right') : console.log('wrong') 
}