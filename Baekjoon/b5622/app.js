const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = input[0];
const arr = ["ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"];
let count = 3 * input.length;

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[j].includes(input[i])) {
      count += j;
    }
  }
}
console.log(count);
