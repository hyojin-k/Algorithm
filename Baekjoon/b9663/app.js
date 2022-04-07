const { checkPrime } = require('crypto');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = +input[0];

const visited = [...Array(input)].fill(false);
let result = 0;

DFS(0);

function DFS(x) {
  if (x === input) {
    // 행을 다 채웠을 때
    result += 1;
  } else {
    for (let i = 0; i < input; i++) {
      visited[x] = i;
      if (check(x)) DFS(x + 1);
    }
  }
}

// x => 행, visited[x] => 열
// 행,열에 해당하는 위치에 둘 수 있는지 check
function check(x) {
  for (let i = 0; i < x; i++) {
    // 같은 행에 위치하는 경우
    if (visited[x] === visited[i]) return false;
    // 대각선 위치인 경우
    if (Math.abs(visited[x] - visited[i]) === x - i) return false;
  }
  return true;
}

console.log(result);
