const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// 알고리즘 - 우선순위 큐

// 모범답안 추가 예정


// 시간초과

const num = +input[0]
let arr = [];
let newArr = [];
let answer = '';

for(let i=1; i<=num; i++){
  arr.push(+input[i])
}

for(let j=0; j<num; j++){
  if(arr[j]===0){
    // 배열에 담겨있는 숫자가 없을 때 0 출력
    if(newArr.length===0) {
      answer += 0 + '\n';
    } else{
      // 가장 큰 수 출력 후 제거
      answer += newArr[0] + '\n';
      newArr.shift();
    }
  }else{
    // 내림차순 정렬
    newArr.push(arr[j])
    newArr.sort((a,b) => b-a);
  }
}
console.log(answer);