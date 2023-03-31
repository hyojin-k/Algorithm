let absolutes = [4, 7, 12];
let signs = [true, false, true];

solution(absolutes, signs);

function solution(absolutes, signs) {
  let answer = 0;

  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i]) {
      answer += absolutes[i];
    } else {
      answer -= absolutes[i];
    }
  }
  console.log(answer);
}
