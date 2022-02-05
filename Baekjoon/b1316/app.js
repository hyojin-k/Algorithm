const fs = require('fs');
const { stringify } = require('querystring');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split("\n");

const N = +input.shift();
let count = N;

for(let i = 0; i<N;i++){
    const arr = []

    for(let j= 0; j<input[i].length;j++){
        if(arr.includes(input[i][j])){
            arr.push(input[i][j])

            if(arr[j-1] !== arr[j]){
                count--;
                break;
            }
        }else{
            arr.push(input[i][j])
        }
    }
}
console.log(count)
