let priorities =[1, 1, 9, 1, 1, 1];
let location = 0;

solution(priorities, location);

// 알고리즘 - 스택/큐

function solution(priorities, location) {
  let answer = 0;
  // 고유 index 값 지정
  let arr = Array.from({length: priorities.length}, (v, i) =>i);

  let print;
  let print_index;

  while(priorities[0]){
    // 첫번째 값
    print=priorities.shift();

    // 배열 내에 첫번째 값보다 우선순위가 높은 수가 있는 경우 
    if(priorities.some((v) => v>print)){
      //첫번째 값과 고유 index 각각 뒤로 이동
      priorities.push(print); 
      arr.push(arr.shift());
    }
    // 첫번째 값이 가장 우선순위가 높은 경우
    else{
      answer++;
      // 고유 인덱스를 location과 비교하여 같아질때까지 answer++
      print_index = arr.shift();
      if(print_index == location) break;
    }
  }
  return answer;
}



// 실패

// function solution(priorities, location) {
//   let arr = Array.from({length: priorities.length}, (v, i) =>i);
//   let newArr = [];
//   for(let a = 0; a<arr.length ; a++){
//     newArr.push({index: arr[a], num:priorities[a]})
//   }
//   console.log(newArr)
  
//   let first = 0;
//   let doc = newArr[location]['index'];
//   console.log(doc)

//   for(let i = 0; i<newArr.length;i++){
//     if(newArr[0]['num']<newArr[i]['num']){
//       first = newArr.shift();
//       newArr.push(first);
//     }
//     console.log(newArr)
//   }

//   console.log(newArr.findIndex(v=>v.index === doc)+1)  
// }
