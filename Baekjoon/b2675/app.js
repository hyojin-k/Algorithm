const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split("\n");

const T = input.shift();
let R = 0;
let S = '';

for(let i = 0; i<T; i++){
    arr = input[i].split(' ').map(item => item)
    R = +arr[0];
    S = arr[1];
    let result = [];

    for(let j = 0; j<S.length;j++){
        result.push(S[j].repeat(R))
    }
    console.log(result.join('').trim())
}