let number = 5;
let limit = 3;
let power = 2;

solution(number, limit, power);

function solution(number, limit, power) {
  let answer = 0;
  const arr = [];
  for (let i = 1; i <= number; i++) {
    let count = 1;
    for (let j = 1; j <= i / 2; j++) {
      if (i % j === 0) count++;
    }
    arr.push(count);
  }

  for (let k = 0; k < arr.length; k++) {
    if (arr[k] <= limit) {
      answer += arr[k];
    } else {
      arr[k] = power;
      answer += arr[k];
    }
  }
  console.log(answer);
}
