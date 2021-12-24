const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on('line', function (line) {
  input.push(parseInt(line));
}).on('close', function () {
  const X = input[0];
  const Y = input[1];

  if(X>0){
    (Y>0 ? console.log(1) : console.log(4))
} else {
    (Y>0 ? console.log(2) : console.log(3))
}
    process.exit();
});


// fs 모듈 사용 (런타임 에러)

// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs.readFileSync(filePath).toString().split("\n");

// solution(+input[0], +input[1]);

// function solution(x, y) {
//   if (x > 0) {
//     y > 0 ? console.log(1) : console.log(4);
//   } else {
//     y > 0 ? console.log(2) : console.log(3);
//   }
// }