let answers = [1,3,2,4,2]

solution(answers);

// 알고리즘 - 완전탐색

function solution (answers) {
    var answer = [];

    let p1 = [1,2,3,4,5];
    let p2 = [2,1,2,3,2,4,2,5];
    let p3 = [3,3,1,1,2,2,4,4,5,5];

    // 정답을 맞춘 갯수 
    let s1 = answers.filter((a, i) => a === p1[i%p1.length]).length;
    let s2 = answers.filter((a, i) => a === p2[i%p2.length]).length;
    let s3 = answers.filter((a, i) => a === p3[i%p3.length]).length;

    // 세 사람의 점수 중 최대값
    let max = Math.max(s1, s2, s3);

    // 최대값과 맞춘 답이 일치하면 해당 번호를 배열에 push
    if(s1 === max) answer.push(1);
    if(s2 === max) answer.push(2);
    if(s3 === max) answer.push(3);

    console.log(answer)
}



// 실패

// function solution(answers){
//     const p1 = [1,2,3,4,5];
//     const p2 = [2,1,2,3,2,4,2,5];
//     const p3 = [3,3,1,1,2,2,4,4,5,5];

//     let a1 = [];
//     let a2 = [];
//     let a3 = [];

//     for(let i = 0; i<answers.length;i++){
//         if(answers[i] === p1[i]){
//             a1.push(p1[i])
//         }
//         if(answers[i] === p2[i]){
//             a2.push(p2[i])
//         }
//         if(answers[i] === p3[i]){
//             a3.push(p3[i])
//         }
//     }
    
//     const len1 = [1, a1.length];
//     const len2 = [2, a2.length];
//     const len3 = [3, a3.length];

//     const arr = [len1,len2,len3]
//     arr.sort((a,b) => a[1]-b[1])

//     if(arr[0][1]===arr[1][1] && arr[1][1]===arr[2][1] && arr[0][1]===arr[2][1]) {
//         console.log([arr[0][0],arr[1][0],arr[2][0]])
//     }else if(arr[0][1] !== arr[1][1] !== arr[2][1]){
//         console.log([arr[2][0]])
//     }else{
//         console.log([arr[1][0], arr[2][0]])
//     }
// }
