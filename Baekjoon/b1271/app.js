const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];
// 숫자의 범위가 최대 10^1000
// => Number가 아닌 BigInt 사용
input = input.split(' ').map(BigInt);

solution(input[0], input[1]);

function solution(n, m) {
    console.log(n,m)
    // 숫자 뒤 n을 없애기 위해 string 형태로 변환
    console.log((n/m).toString());
    console.log((n%m).toString());
}
