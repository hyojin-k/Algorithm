const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// 알고리즘 - 브루트포스

// 통과

range = input[0]
range = range.split(' ').map(Number)

num = input[1]
num = num.split(' ').map(Number)

solution(range[0], range[1], num)

function solution(N, M, num){
    let answer = 0;
    for(let i = 0; i<N-2; i++){
        for(let j = i+1; j<N-1; j++){
            for(let k= j+1; k<N; k++){
                let sum = num[i]+num[j]+num[k];
                if(sum<=M && sum>answer){
                    answer = sum
                }
            }
        }
    }
    console.log(answer)
}


// 메모리 초과, 런타임에러

range = input[0]
range = range.split(' ').map(Number)

num = input[1]
num = num.split(' ').map(Number)

solution(range[0], range[1], num)

function solution(N, M, num){
    let sumArr = []
    for(let i = 0; i<N; i++){
        for(let j = i+1; j<N; j++){
            for(let k= j+1; k<N; k++){
                let sum = num[i]+num[j]+num[k];
                if(sum<=M){
                    sumArr.push(sum)
                    sumArr.sort((a,b) => b-a)
                }
            }
        }
    }
    console.log(sumArr[0])
}
