const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const num = input.shift();
// 물품 갯수 N, 버틸수 있는 무게 K
const [N, K] = num.split(' ').map(Number);

// 물품의 무게 W, 가치 V
let A = [{ W: 0, V: 0 }];

for (let i = 0; i < N; i++) {
  let [W, V] = input[i].split(' ').map(Number);
  A.push({ W: W, V: V });
}

let dp = [...Array(N + 1)].fill(null).map((_) => [...Array(K + 1).fill(0)]);

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= K; j++) {
    if (A[i].W <= j) {
      // 물품을 넣을 수 있는 상태
      dp[i][j] = Math.max(A[i].V + dp[i - 1][j - A[i].W], dp[i - 1][j]);
    } else {
      // 물품을 넣을 수 없는 상태
      dp[i][j] = dp[i - 1][j];
    }
  }
}
console.log(dp[N][K]);
