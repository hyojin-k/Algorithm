let arr1 = [
  [1, 2],
  [2, 3],
];
let arr2 = [
  [3, 4],
  [5, 6],
];

solution(arr1, arr2);

function solution(arr1, arr2) {
  const answer = [];
  for (let i = 0; i < arr1.length; i++) {
    const arr = [];
    answer.push(arr);
    for (let j = 0; j < arr1[0].length; j++) {
      arr.push(arr1[i][j] + arr2[i][j]);
    }
  }
  console.log(answer);
}
