const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const T = input.shift();

for(let i = 0; i<T; i++){
    const k = +input.shift();
    const n = +input.shift();
    const a = [];

    for(let i= 0;i<=k; i++){
        // 1호는 무조건 1명
        a.push([1]);
        for(let j= 1; j<n; j++){
            if(i === 0){
                // 0층일 때
                a[i].push(j+1);
            }else{
                // 1층 이상 부터
                a[i].push(a[i][j-1] + a[i-1][j]);
            }
        }
    }
    console.log(a[k][n-1])
}
