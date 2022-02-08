const fs = require("fs");
const { stringify } = require("querystring");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input.shift();
const arr = input.sort((a,b) => a.length - b.length || a.localeCompare(b));
const result = new Set(arr);
console.log(Array.from(result).join('\n'))


// 제대로 출력되지만 실패
// const N = +input.shift();
// const result = [];

// input.sort();
// input.sort((a,b)=> a.length - b.length);
// for(let i = 0; i<N; i++){
//     if(input[i-1] !== input[i]){
//         result.push(input[i])
//     }
// }

// console.log(result.join('\n'))
