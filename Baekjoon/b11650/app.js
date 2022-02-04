const fs = require("fs");
const { stringify } = require("querystring");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input.shift();
let arr = input.map(v => v.split(" ").map(Number));

let result = '';

arr.sort((a, b) => {
  if (a[0] !== b[0]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
}).forEach(v => {
    result += `${v[0]} ${v[1]} \n`
})

console.log(result)


//  실패

// const N = input[0];
// let arr = []

// for(let i = 1; i<=N; i++){
//     arr.push(input[i].split(' ').map(Number))
// }

// arr.sort((a,b) => a[0]-b[0])
// arr.sort((a,b) => a[1]-b[1])

// for(result of arr){
//     console.log(result.join(' '))
// }