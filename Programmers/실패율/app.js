let N = 5; //전체 스테이지 개수
let stages = [2, 1, 2, 6, 2, 4, 3, 3]; // 사용자가 현재 멈춰있는 스테이지 번호

solution(N, stages);

function solution (N, stages) {
    let arr = [];
    let p = stages.length;
    for(let i = 1; i <=N+1; i++){
            let count = stages.filter(v => v === i).length;
            // 스테이지, 실패율
            arr.push([i, count/p]);
            p -= count
    }
        // 마지막은 모두 깬 사람 => 실패율 x
        arr.pop()
        // 실패율 내림차순 정렬
        arr = arr.sort((a,b) => b[1] - a[1])
        console.log(arr.map(a => a[0]))
}


// 첫번째 입력값 출력 오류

// function solution (N, stages) {
//     let arr = [];
//     for(let i = 1; i <=N+1; i++){
//             let count = stages.filter(v => v === i).length;
//             arr.push([i, count/stages.length]);
//             console.log(arr)
//             stages.length -= count
//             console.log(stages.length)
//     }
//         arr.pop()
//         arr = arr.sort((a,b) => b[1] - a[1])
//         console.log(arr.map(a => a[0]))
// }


// 실패

// function solution (N, stages) {
//     stages.sort();
//     console.log(stages)
//     let arr = [];
//     for(let i = 1; i <=N; i++){
//         let count=0;

//         if(i === stages[0]){
//             count = stages.filter(v => v === stages[0]).length;
//             console.log(count);
//             // console.log(stages)

//             arr.push(count/stages.length);
//             console.log(arr)    

//             for(let j =1; j<=count;j++){
//                 stages.shift()
//                 console.log(stages)
//             }
//         }
//     }
//     console.log(arr)
// }

