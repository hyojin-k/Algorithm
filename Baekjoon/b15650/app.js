const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = input[0].split(' ').map(Number)[0];
const M = input[0].split(' ').map(Number)[1];

let result = '';
const visited = [...Array(N)].fill(false);

const dfs = [];
function DFS(idx, count) {
  if (count === M) {
    result += `${dfs.join(' ')}\n`;
    return;
  }

  for (let i = idx; i < N; i++) {
    console.log(visited);
    if (visited[i] === true) continue;

    visited[i] = true;
    dfs.push(i + 1);

    DFS(i, count + 1);
    dfs.pop();
    visited[i] = false;
  }
}

DFS(0, 0);
console.log(result);
