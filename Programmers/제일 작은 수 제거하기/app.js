const arr = [4,3,2,1];

solution(arr);

// filter 사용

function solution(arr){
    let result = [];
    if(arr.length ===1) {
        console.log([-1]);
    }else{
        // 가장 작은 수를 구하고 그 수를 제외한 배열 출력
        let min = Math.min(...arr);
        result = arr.filter(v=>v !== min)

        console.log(result)
    }
}

// indexOf, splice 사용

function solution(arr) {
    arr.length>1 ? 
    arr.splice(arr.indexOf(Math.min(...arr)),1) :
    arr=[-1];
    console.log(arr)
}