const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input[0].split(" ").map((item) => +item);

solution(input[0], input[1]);

function solution(M, N) {

  let arr = [];
  let answer = '';

  // 0부터 N까지의 수 
  // 소수만 true로 남겨둘 예정
  for(let i=0; i<=N; i++){
    arr.push(true);
  }
  // 0과 1은 소수가 아닙
  arr[0] = arr[1] = false;
  
  for(let i=2;i<=N;i++){
    if(arr[i]){
      // arr[i]의 배수인 숫자를 false로 변환
      for(let j=2; j<=N/i; j++){
        arr[i*j] = false;
      }
    }
  }

  // M에서 N까지의 숫자 중에서 true인 값의 인덱스만 출력
  for(let k=M; k<=N;k++){
    if(arr[k]){
      answer += k+'\n';
    }
  }
  console.log(answer.trim());
}


  // 실패

  // let arr = [];
  // for (let a = M; a <= N; a++) {
  //   arr.push(a);
  // }

  // console.log(arr);
  // console.log(arr.length);
  
  // for(let i = 0; i<arr.length;i++){
    // for(let j=2; j*j <=N; j++){
    //   if(arr[j]){
    //     for(let k=j*j; k<=N;k+=j){
    //       arr.splice(k,1)
    //     }
    //   }
    // }
  // }
  
  // console.log(arr)

