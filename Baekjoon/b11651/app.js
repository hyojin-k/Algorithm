const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input.shift();
let result = "";

let arr = input.map((v) => v.split(" ").map(Number));

arr
  .sort((a, b) => {
    if (a[1] !== b[1]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  })
  .forEach((v) => (result += `${v[0]} ${v[1]}\n`));

console.log(result);
