const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split("\n");
console.log(input)
input = input[0]
input = input.split(' ').map(Number)

solution(input[0], input[1])

function solution(a, b){
    const [A, B] = [a, b]

    // 최대공약수 구하기
    let r = 0;
    while (b!== 0){
        r = a%b;
        a = b;
        b = r;
    }

    console.log(a); // 최대공약수
    console.log(A*B/a) // 최소공배수
}



// 제대로 출력되지만 틀렸습니다 뜸

function solution(a, b){

    let i = 1;
    let j = 1;
    let aArr = [];
    let same = [];

    // 첫번째 숫자 약수 배열
    while(a/i !== 1){
        if(a%i ===0){
            aArr.push(i);
            aArr.push(a/i);
            i++;
        }else{
            break;
        }
    }
    console.log(aArr)

    // 첫번째, 두번째 숫자 공통 약수 배열
    while(b/j !== 1){
        if(b%j ===0){
            {aArr.includes(j) && same.push(j)}
            {aArr.includes(b/j) && same.push(b/j)}
            same.sort((a,b) => b-a); // 내림차순 정렬
            j++;
        }else{
            break;
        }
    }
    console.log(same)

    const A = same[0]; // 최대공약수
    const B = A * a/A * b/A; //최소공배수

    console.log(A +'\n' + B)
}