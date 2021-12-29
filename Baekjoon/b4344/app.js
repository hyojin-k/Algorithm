const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const C = +input[0]

// for문 사용

for(let i = 1; i<=C; i++){
  let score = input[i].split(' ').map(Number);
  let N = score[0];
  let sum = 0;

  for(let j = 1; j<score.length;j++){
    sum +=score[j];
  }

  let avg = sum/N;
  let count = 0;

  for(let k = 1;k<score.length;k++){
    if(avg<score[k]) count++;
  }

  const answer = count/N*100; 
  console.log(answer.toFixed(3)+'%')
}


// .reduce() 사용

for(let i = 1; i<=C; i++){
  let score = input[i].split(' ').map(Number);
  let N = score.shift();
  let sum = score.reduce((pre,cur) => pre+= cur);
  let avg = sum/N;
  let count = 0;

  for(let k = 0;k<score.length;k++){
    if(avg<score[k]) count++;
  }

  const answer = count/N*100; 
  console.log(answer.toFixed(3)+'%')
}
