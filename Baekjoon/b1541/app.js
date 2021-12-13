const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// '-' 연산자로 구분
input = input[0].split('-');

solution(input)

function solution(input){
    // '+' 계산한 숫자들 넣을 배열
    let sum = [];

    // '+'로 묶여있는 숫자들을 각각 합산하여 sum 배열에 push 
    for(i of input){
        let cnt = 0;
        let num = i.split('+');
        for(j of num){
            cnt += parseInt(j);
        }
        sum.push(cnt);
    }

    let result = sum[0];
    
    // 가장 첫번째 수에서부터 '-' 연산을 하여 최소값 게산
    for(let j=1; j<sum.length; j++){
        result -=sum[j];
    }
    console.log(result)
}