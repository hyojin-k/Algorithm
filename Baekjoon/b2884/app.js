const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input= input[0].split(' ').map(Number)

solution(input[0], input[1]);

function solution(H, M) {
  M -= 45;
  if(M<0){
    M+=60;
    H--;
    if(H === -1){
      H+=24;
    }
  }

  console.log(H, M)
}