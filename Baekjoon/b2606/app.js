const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

// dfs

const N = +input.shift();
const M = +input.shift();

let graph = [...Array(N + 1)].map(() => []);
let visited = [...Array(N + 1)].fill(false);
let result = 0;

// graph 생성
for (const v of input) {
  const [start, dest] = v.split(' ').map((e) => +e);
  graph[start].push(dest);
  graph[dest].push(start);
}

visited[1] = true;

function dfs(start) {
  graph[start].map((dest) => {
    if (!visited[dest]) {
      visited[dest] = true;
      result += 1;
      dfs(dest);
    }
  });
}

dfs(1);

console.log(result);

// 실패

// const N = +input.shift();
// const pair = +input.shift();

// input = input.map((v) => v.split(' ').map((e) => Number(e)));

// const result = [];

// for (let i = 0; i < pair; i++) {
//   if (input[i][0] === 1) {
//     result.push(input[i][1]);
//   }
//   if (result.includes(input[i][0]) && !result.includes(input[i][1])) {
//     result.push(input[i][1]);
//   }
// }
// console.log(result.length);
