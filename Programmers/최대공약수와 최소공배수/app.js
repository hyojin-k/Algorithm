let n = 3;
let m = 12;

solution(n, m);

function solution(n, m) {
  const [N, M] = [n, m];

  let a = 0;
  while (m !== 0) {
    a = n % m;
    n = m;
    m = a;
  }

  const answer = [n, (N * M) / n];

  console.log(answer);
}

// 다른 풀이

function solution(a, b) {
  var r;
  for (var ab = a * b; (r = a % b); a = b, b = r) {}
  return [b, ab / b];
}
