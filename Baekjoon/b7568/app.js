const fs = require('fs');
const { stringify } = require('querystring');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split("\n");

const N = +input.shift();
const arr = [];
let result = [];

for(let i = 0 ; i<N ; i++){
    arr.push(input[i].split(' ').map(Number))
}

for(let j= 0; j<N; j++){
    let count =0;

    for(let k = 0; k<N; k++){
        if(arr[j][0] < arr[k][0] && arr[j][1] < arr[k][1]){
            count++;
        }
    }
    result.push(count+1)
}
console.log(result.join(' '))