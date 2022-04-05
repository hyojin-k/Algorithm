const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const [N, M, V] = input[0].split(' ').map(Number);

// graph 빈 배열 생성
graph = [...Array(N + 1)].map(() => []);

// 각 인덱스에 연결된 노드 push
for (let i = 0; i < M; i++) {
  let [from, to] = input[i + 1].split(' ').map(Number);
  graph[from].push(to);
  graph[to].push(from);
}
// 오름차순 정렬
graph.forEach((element) => {
  element.sort((a, b) => a - b);
});

// 방문여부 확인할 배열
visited = [...Array(N + 1)].fill(false);
// console.log(visited);

// DFS
let dfs = [];
function DFS(v) {
  // 이미 방문했으면 return
  if (visited[v]) return;
  // 방문 시 true, 방문 노드 push
  visited[v] = true;
  dfs.push(v);

  // 방문한 노드와 연결된 노드 방문
  for (let i = 0; i < graph[v].length; i++) {
    let next = graph[v][i];
    if (visited[next] === false) {
      DFS(next);
    }
  }
}

DFS(V);
console.log(dfs.join(' '));

// BFS
let bfs = [];
visited.fill(false);

function BFS(v) {
  // 방문할 노드를 담는 배열
  let willVisit = [v];
  // 방문할 노드가 없어질때 까지
  while (willVisit.length) {
    let x = willVisit.shift();
    // 이미 방문했으면 continue
    if (visited[x] === true) {
      continue;
    }
    // 방문시 true, 방문노드 push
    visited[x] = true;
    bfs.push(x);

    for (let i = 0; i < graph[x].length; i++) {
      let next = graph[x][i];
      // 연결된 노드 중 방문하지 않은 노드 push
      if (visited[next] === false) {
        willVisit.push(next);
      }
    }
  }
}
BFS(V);
console.log(bfs.join(' '));
