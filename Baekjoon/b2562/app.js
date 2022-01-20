const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input.map(Number)

let num = input[0];
let index = 0;

for(let i = 1; i<9; i++){
    if(num<input[i]){
        num = input[i];
        index = i;
    } 
}

console.log(num)
console.log(index+1)


// 답은 제대로 뜨지만 실패

for(let i = 0; i<input.length-1; i++){
    if(input[i]>input[i+1]){
        num = input[i];
        index = i+1;
    } else{
        num = input[i+1];
        index = i+2;
    }
}

console.log(num + '\n' + index)