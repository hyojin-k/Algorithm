const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

for (let i =0; i<input.length;i++){
    // 0 인경우 출력값 없음
    if(input[i]==0){
        return;
    }

    // 0이 아닌 경우 숫자 n, 2n
    let num = Number(input[i]);
    let num2 = num*2;

    // 배열 내 숫자만큼 true로 채우고, 0과 1인 소수에 해당 안되므로 false
    // 소수인 숫자만 true로 남길 예정
    let isPrimeNum = Array(num2+1).fill(true);
    isPrimeNum[0] = isPrimeNum[1] = false;

    function primeNum() {
        // 에라토스테네스의 체 - 2부터 num2의 제곱근 이하의 범위 설정
        for(let i=2;i<=Math.ceil(Math.sqrt(num2));i++){
            if(isPrimeNum[i]){
                let m = 2;
                // 해당 범위의 소수들로 나누어 지는 수는 false로 바꿈
                while(i*m <=num2){
                    isPrimeNum[i*m] = false;
                    m++;
                }
            }
        }

        // 숫자 범위 사이에 true값으로 남은 소수들만 배열에 담아 length로 갯수 출력
        let results = [];        
        for(let i = num+1;i <= num2; i++){
            if(isPrimeNum[i]){
                results.push(i);
            }
        }
        console.log(results.length);
    }
    primeNum();
}

