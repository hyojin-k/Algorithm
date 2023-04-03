let a = 3;
let b = 1;
let n = 20;

solution(a, b, n);

function solution(a, b, n) {
  let answer = 0;

  while (n >= a) {
    // 추가로 받는 콜라
    const add = parseInt(n / a) * b;

    answer += add;
    n = add + (n % a);
  }
  console.log(answer);
}
