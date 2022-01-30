const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// 내가 한 방법 (for...of 반복문, for문과 includes 사용)

let arr = [];
let result = [];
for(num of input){
    arr.push(+num%42)
}

for(let i = 0 ;i<arr.length; i++){
    if(result.includes(arr[i])){
        continue;
    }else{
        result.push(arr[i])
    }
}
console.log(result.length)


// 참고 (forEach, indexOf 사용)

let numArr = [];
input.forEach(v =>{
    const num = v % 42;

    if(numArr.indexOf(num) === -1){
        numArr.push(num)
    }
})
console.log(numArr.length)