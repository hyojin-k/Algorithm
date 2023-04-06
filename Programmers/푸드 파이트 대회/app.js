let food = [1, 3, 4, 6];

solution(food);

function solution(food) {
  let answer = '';

  for (let i = 1; i < food.length; i++) {
    if (food[i] > 1) {
      answer += String(i).repeat(parseInt(food[i] / 2));
    }
  }

  answer += '0' + answer.split('').reverse().join('');

  console.log(answer);
}
