let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let hand = "right";

solution(numbers, hand);

function solution(numbers, hand) {
    // 좌표 설정
    const pad = {
        1:[0,0], 2: [0,1], 3: [0,2],
        4:[1,0], 5: [1,1], 6: [1,2],
        7:[2,0], 8: [2,1], 9: [2,2],
        '*':[3,0], 0: [3,1], '#': [3,2],
    }

    // 초기값 
    let lH = '*';
    let rH = '#';
    let result = ''

    // 이동 값 구하기
    function dis(num, lH, rH, pad, hand){
        const lD = Math.abs(pad[lH][0] - pad[num][0])+Math.abs(pad[lH][1] - pad[num][1])
        const rD = Math.abs(pad[rH][0] - pad[num][0])+Math.abs(pad[rH][1] - pad[num][1])
        // 이동값이 같을때
        if(lD === rD){
            return hand === 'left' ? 'L' : 'R';
        }else{
            // 다를 때
            return lD < rD ? 'L' : 'R'
        }
    }

    for(let num of numbers){
        if(num % 3 === 1){
            result += 'L';
            lH = num;
        }else if(num%3 === 0 && num !== 0){
            result += 'R';
            rH = num;
        }else{
            // 중간 키패드
            result += dis(num, lH, rH, pad, hand);
            result[result.length-1] === 'L' ? lH = num: rH = num
        }
    }
    console.log(result);
}


// 중간 키패드에서 막힘

// function solution (numbers, hand) {
//     // 번호마다 배열 분리
//     const leftArr = [1,4,7];
//     const rightArr = [3,6,9];
//     const others = [2,5,8,0];
//     // 양손의 현재 위치 기억
//     let left = 0;
//     let right = 0;
//     let answer=''

//     for(let i = 0; i< numbers.length; i++){
//         // 해당 배열에 속하면 'L', 'R' 출력
//         if(leftArr.includes(numbers[i])){
//             answer += 'L';
//             left = numbers[i];
//         }else if(rightArr.includes(numbers[i])){
//             answer += 'R';
//             right = numbers[i];
//         }else if(others.includes(numbers[i])){
//             // 현재 위치한 왼손/오른손 숫자와 차이가 같으면 hand에 따라 구분
//             if(Math.abs(numbers[i]-left) === Math.abs(numbers[i]-right)){
//                 hand === 'right' ? answer += 'R' : answer += 'L'
//             }else{
//                 // 다른 경우 => 오류 발생
//                 Math.abs(numbers[i]-left) > Math.abs(numbers[i]-right) ? 
//                 answer += 'R' :
//                 answer += 'L'
//             }
//             console.log(answer, numbers[i])
//         }
//     }
// }


