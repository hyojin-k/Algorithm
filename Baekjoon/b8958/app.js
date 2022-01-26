const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const num = input[0];

for(let i= 1; i<=num;i++){
  let count = 0;
  let result = 0;

  for(let j=0; j<input[i].length;j++){
    if(input[i][j] === 'O'){
      count++;
    }else{
      count = 0
    }
    result +=count;
  }
  console.log(result)
}
