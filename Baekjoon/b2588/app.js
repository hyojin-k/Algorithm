const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
solution(+input[0], +input[1])

function solution(A, B) {
    let answer = ''
    const ans1 = A*(B%10);
    const ans2 = A*(B%100-B%10);
    const ans3 = A*(B%1000-B%100); 
    const sum = ans1+ans2+ans3;
    
    answer += ans1 + '\n';
    answer += ans2/10 + '\n';
    answer += ans3/100 + '\n';
    answer += sum

    console.log(answer)
}