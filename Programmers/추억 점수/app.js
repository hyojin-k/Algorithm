let name = ["may", "kein", "kain", "radi"];
let yearning = [5, 10, 1, 3];
let photo = [
  ["may", "kein", "kain", "radi"],
  ["may", "kein", "brin", "deny"],
  ["kon", "kain", "may", "coni"],
];

solution(name, yearning, photo);

function solution(name, yearning, photo) {
  let answer = [];
  let sum = 0;
  photo.forEach((nameList) => {
    nameList.forEach((names) => {
      if (name.includes(names)) {
        sum += yearning[name.indexOf(names)];
      }
    });
    answer.push(sum);
    sum = 0;
  });
  console.log(answer);
}

// 다른 사람 풀이
function solution(name, yearning, photo) {
  let obj = {};
  for (let i = 0; i < name.length; i++) {
    obj[name[i]] = yearning[i];
  }
  console.log(
    photo.map((value) =>
      value.map((v) => (obj[v] ? obj[v] : 0)).reduce((acc, cur) => acc + cur, 0)
    )
  );
}
