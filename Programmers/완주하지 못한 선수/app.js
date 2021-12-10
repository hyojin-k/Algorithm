let participant = ["mislav", "stanko", "mislav", "ana"]
let completion = ["stanko", "ana", "mislav"]

// 알고리즘 - 해시

solution(participant, completion);

function solution(participant, completion){
  participant.sort();
  completion.sort();
  for(let i=0; i<participant.length;i++){
    if(participant[i] !== completion[i]){
      return participant[i]
    }
  }
}


// 테스트 통과 실패

// function solution (participant, completion) {
//   for(let i =0; i<participant.length;i++){
//     for(let j=0;j<completion.length;j++){
//         if(participant[i]===completion[j]){
//             participant.splice(i,1);
//             completion.splice(j,1);
//             i--;
//             j--;
//         }
//     }
// }
// console.log(participant)
// }