let k = 4;
let score = [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000];

solution(k, score);

function solution(k, score) {
  let answer = [];
  let arr = [];
  for (let i = 0; i < score.length; i++) {
    arr.push(score[i]);
    arr = arr.sort((a, b) => b - a);
    if (arr.length <= k) {
      answer.push(arr[arr.length - 1]);
    } else {
      answer.push(arr[k - 1]);
    }
  }
  console.log(answer);
}
