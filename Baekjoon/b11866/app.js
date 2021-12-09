const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// 알고리즘 - 큐

const num = +input[0].split(' ')[0]
const idx = +input[0].split(' ')[1]

const arr = Array.from({ length : num}, (v, i) => i+1);
const answer = [];

while (arr.length > 0){
    // 첫번째, 두번째 숫자 뒤로 보내기
    for(let i = 0; i< idx-1; i++){
        const cutNum = arr.shift();
        arr.push(cutNum);
    }
    // 맨 앞에 있는 숫자 빼서 새로운 배열에 push
    const ansNum = arr.shift();
    answer.push(ansNum);
}

console.log(`<${answer.join(', ')}>`)



// 제대로 출력되지만 틀렸습니다 뜸

const num = +input[0].split(' ')[0]
const idx = +input[0].split(' ')[1]

let arr = [];
let answer = [];

for(let i=1; i<=num;i++){
    arr.push(i);
}

while(arr.length !==0){
    if(arr.length <=2){
        cutNum = arr.shift();
        answer.push(cutNum);
    }else{
        let cutArr = arr.splice(0,2); // 앞에 짤린 배열
        cutNum = arr.shift(); // 삭제된 숫자
        answer.push(cutNum); // 결과물 배열
        arr.splice(arr.length, 0, cutArr[0], cutArr[1]) // 새로운 배열 만들기
    }
}

console.log('<'+answer.join(', ')+'>');
