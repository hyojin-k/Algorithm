const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];

solution(input);

function solution(n) {
    let count = 0;
    
    while (true) {
        if(n%5 === 0){
            count += n/5;
            console.log(count)
            break;
        }else if(n <0){
            console.log(-1);
            break;
        }
        n -=3;
        count ++;
    }

}
