const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let result = '';
for(let i = 1; i<=+input;i++){
  result += i +'\n';
}
console.log(result)
