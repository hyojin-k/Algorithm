let t = '3141592';
let p = '271';

solution(t, p);

function solution(t, p) {
  const array = [];
  for (i = 0; i <= t.length - p.length; i++) {
    array.push(t.substr(i, p.length));
  }

  const answer = array.filter((v) => v <= p).length;
  console.log(answer);
}
