const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let arr = [];
let left = [];
let right = [];

for(let i = 0; i<input.length;i++){
    arr.push(input[i].split(' ').map(Number))
    
    if(left.indexOf(arr[i][0]) === -1){
        left.push(arr[i][0])
    }else{
        left.splice(left.indexOf(arr[i][0]),1)
    }

    if(right.indexOf(arr[i][1]) === -1){
        right.push(arr[i][1])
    }else{
        right.splice(right.indexOf(arr[i][1]),1)
    }
}

console.log(left[0], right[0])