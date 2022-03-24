const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const arr = [];

for (v of input) {
  arr.push(+v.trim());
}
arr.sort((a, b) => a - b);

// 산술평균
let a = Math.round(arr.reduce((pre, next) => pre + next) / N);
console.log(a === -0 ? 0 : a);

// 중앙값
let b = arr[Math.floor(N / 2)];
console.log(b);

// 최빈값
const map = new Map();
let max = 1;
for (let v of arr) {
  if (map.has(v)) {
    max = Math.max(max, map.get(v) + 1);
    map.set(v, map.get(v) + 1);
  } else {
    map.set(v, 1);
  }
}
const maxArr = [];
for (let [key, v] of map) {
  if (v === max) maxArr.push(key);
}

const c = maxArr.length === 1 ? maxArr[0] : maxArr[1];
console.log(c);

// 범위
let d = arr[arr.length - 1] - arr[0];
console.log(d);
