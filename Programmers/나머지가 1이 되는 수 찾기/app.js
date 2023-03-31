let n = 12;

solution(n);

function solution(n) {
  for (let i = 1; i < n; i++) {
    if (n % i === 1) console.log(i);
  }
}
