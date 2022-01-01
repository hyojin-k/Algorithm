let a = [-1,0,1]
let b = [1,0,-1]

solution(a,b);

// for문 사용

function solution (a,b) {
    let result = 0;

    for(let i = 0; i<a.length; i++){
        result += a[i]*b[i]
    }
    console.log(result)
}

// reduce 함수 사용

function solution(a, b) {
    console.log (a.reduce((acc, _, i) => acc += a[i] * b[i], 0));
}