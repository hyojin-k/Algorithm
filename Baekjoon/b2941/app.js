const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = input[0];

// 내가 했던 방식

const word = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
let count = 0;

for (let i = 0; i < word.length; i++) {
  let target = word[i];
  let idx = input.indexOf(target);

  // 해당 문자 카운트
  while (idx !== -1) {
    count++;
    // 해당 문자 제거 후 빈칸으로 대체
    input = input.replace(target, " ");
    idx = input.indexOf(target);
  }
}

// word에 해당되지 않은 나머지 문자 빈칸 제거
input = input.replace(/ /gi, "");
console.log(count + input.length);


// 짧은 코드

const word = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for(let v of word){
    input = input.split(v).join('V');
}

console.log(input.length);

