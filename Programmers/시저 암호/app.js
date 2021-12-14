let s = "a B z";
let n = 4;

solution(s, n);

// 아스키코드 사용 x

function solution(s,n) {
  const ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const abc = 'abcdefghijklmnopqrstuvwxyz';
  let answer = '';

  for(let i = 0; i< s.length; i++){
    let text = s[i];
    // 공백일 경우 공백 반환
    if(text == ' '){
      answer += ' ';
      continue;
    }
    // text가 대문자이면 대문자 배열, 소문자이면 소문자 배열에서 검사
    let textArr = ABC.includes(text) ? ABC : abc;
    // 위치한 인덱스 값을 구해 n 만큼 더하기
    let index = textArr.indexOf(text)+n;
    // 알파벳 전체 길이(25)보다 인덱스가 길면 0부터 다시 시작해야함
    if(index >= textArr.length) index -= textArr.length;

    // 새로운 인덱스에 해당하는 문자 반환
    answer += textArr[index];
  }
  return answer;
}
 

// 아스키코드 사용 o

function solution(s, n){
  return s.split('').map(v =>{
    // 공백은 그대로 반환
    if(v === ' ') {
      return v;
    } else {
      // 모든 문자를 대문자로 바꾼 후 비교
      return v.toUpperCase().charCodeAt() +n >90 ?
      // 범위를 넘어가면 처음 순서로 돌아가야함
      String.fromCharCode(v.charCodeAt() + n -26) :
      String.fromCharCode(v.charCodeAt() +n)
    }
  }).join('');
}

// 실패 

// function solution(s, n) {
//   let answer = [];
//   let idx = 0;
//   const abc = [ "a", "b", "c", "d", "e",  "f",  "g",  "h", "i", "j", "k", "l",  "m", "n",  "o", "p", "q", "r", "s", "t", "u", "v", "w",  "x", "y", "z"];
//   const ABC = [];
//   for (a of abc) {
//     ABC.push(a.toUpperCase());
//   }

//   for (let i = 0; i < s.length; i++) {
//     idx = abc.indexOf(s[i]);
//     if (s[i] === " ") {
//       idx = " ";
//     } else if (idx === -1) {
//       idx = ABC.indexOf(s[i]);
//     }
//     if (idx === 25) {
//       idx = -1;
//     }
//     answer.push(idx);
//   }

//   for(let j = 0; j <answer.length; j++){
//     if(typeof(answer[j]) === 'number'){
//       answer[j] +=n;
//     }
//   }
//   console.log(answer)
//   console.log(answer.join(''));
// }
