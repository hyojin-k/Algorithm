const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(+input[0])

function solution(N){
    let count = 0;
    
    for(let i = 1; i<=N;i++){
        // 세자리수 이하인 경우 무조건 한수
        if(N<100) {
            console.log(N);
            return;
        }else if(i>=100){
            // 세자리수 각각의 숫자 구분
            const one = i%10;
            const ten = ((i-one)%100)/10;
            const hun = (i-ten*10-one)/100;
    
            // 각 자릿수 차이 비교
            const m1 = hun-ten;
            const m2 = ten-one;
            
            // 한수인 경우 카운트
            if(m1 === m2){
                count++;
            }    
        } 
    }
    // 세자리수 이하인 수(한수) 99개 + 세자리수에서의 한수
    console.log(99+count)
}