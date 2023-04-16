let X = "5525";
let Y = "1255";

solution(X, Y);

function solution(X, Y) {
  let answer = "";
  X = X.split("");
  Y = Y.split("");

  for (let i = 0; i < 10; i++) {
    const x = X.filter((v) => Number(v) === i).length;
    const y = Y.filter((v) => Number(v) === i).length;
    answer += String(i).repeat(Math.min(x, y));
  }

  if (answer === "") console.log("-1");
  if (Number(answer) === 0) console.log("0");
  console.log(
    answer
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

// 시간초과

// function solution(X, Y) {
//   const x = X.split("");
//   const y = Y.split("");
//   const arr = [];

//   for (let i = 0; i < x.length; i++) {
//     for (let j = 0; j < y.length; j++) {
//       if (x[i] === y[j]) {
//         arr.push(x[i]);
//         y.splice(j, 1);
//       }
//     }
//   }

//   arr.sort((a, b) => b - a);

//   console.log(
//     arr.length === 0 ? "-1" : Number(arr.join("")) > 0 ? arr.join("") : "0"
//   );
// }
