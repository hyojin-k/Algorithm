let ingredient = [2, 1, 1, 2, 3, 1, 2, 3, 1];

solution(ingredient);

function solution(ingredient) {
  var answer = 0;
  const num = [];

  for (let i = 0; i < ingredient.length; i++) {
    num.push(ingredient[i]);

    if (num.slice(-4).join("") === "1231") {
      answer++;
      num.splice(-4);
    }
  }

  console.log(answer);
}

// 시간 초과

function solution(ingredient) {
  var answer = 0;
  let join = ingredient.join("");

  while (join.includes("1231")) {
    answer++;
    join = join.replace("1231", "");
  }

  console.log(answer);
}
