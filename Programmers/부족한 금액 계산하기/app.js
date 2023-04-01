let price = 3;
let money = 20;
let count = 4;

solution(price, money, count);

function solution(price, money, count) {
  let sum = 0;
  for (let i = 1; i <= count; i++) {
    sum += price * i;
  }
  const answer = sum > money ? sum - money : 0;
  console.log(answer);
}
