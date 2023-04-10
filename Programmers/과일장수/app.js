let k = 4;
let m = 3;
let score = [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2];

solution(n);

function solution(k, m, score) {
  let answer = 0;
  score.sort((a, b) => b-a);
  for(let i = m-1; i< score.length; i+=m){
      answer += score[i]*m 
  }
  console.log(answer);
}