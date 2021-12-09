const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// 알고리즘 분류 - 스택

const num = +input[0];

for (let i = 1; i <= num; i++) {
  const cmd = input[i].trim();
  const arr = [];
  let result = "YES";

  for (let j = 0; j < cmd.length; j++) {
    // 문자열이 '(' 인 경우
    if (cmd[j] === "(") {
      arr.push(1);
    } else {
      // 문자열이 ')' 인 경우 이전 문자열에 '('가 존재 할 때
      if (arr.length !== 0) {
        arr.pop();
      } else {
        // 이전 문자열에 '('가 존재하지 않을 때
        result = "NO";
        break;
      }
    }
  }

  // ( ) 짝이 맞지 않을 때 (push 된 숫자들이 pop으로 다 사라지지 않았을 때)
  if (arr.length !== 0) {
    result = "NO";
  }

  console.log(result);
}


// 실패

// const num = +input[0]
// const answer = [];
// let start = 0;
// let end = 0;

// for(let i = 1; i<=num;i++){
//   const cmd = input[i].trim();

//   if(cmd[0] === ')' || cmd[cmd.length-1] === '('){
//     // answer += 'NO' +'\n';
//     answer.push('NO');
//   } else{
//     for(let j = 0;j<cmd.length; j++){
//       if(cmd[j] === '('){
//         start++
//       }else{
//         end++
//       }
//     }
//     console.log(start, end)
//     if(start === end) {
//       answer.push('YES');
//     }else {
//       answer.push('NO');
//     }
//   }
// }

// console.log(answer.join('\n'))
