const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input[0].split(' ').map(item =>+item);

solution(input[0], input[1], input[2]);

function solution(A, B, V) {
  // 정상에 올라가면 미끄러지지않음 => 전체 높이에서 미끄러지는 높이 차감 
  // 하루동안 올라간 높이를 나누어 날짜를 계산
  // 날짜가 나누어 떨어지지 않으면 하루가 더 필요하므로 Math.ceil로 올림
  console.log(Math.ceil((V-B)/(A-B)));

  // 반복문 시간초과
  // let H = 0; 
  // let D = 0; 
  // let count = 0;

  // while(H < input[2]){
  //   H = H + input[0];
  //   D = H - input[1];
  //   if(H >= input[2]){
  //     count++;
  //     console.log(count);
  //   }else{
  //     H = D;
  //     count++;
  //   }
  // }
}
