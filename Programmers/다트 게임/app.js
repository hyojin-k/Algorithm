let dartResult ='1D2S3T*'

solution(dartResult);

function solution (dart) {
    let arr = [];
    let score = [];

    // 숫자, 문자 구분하기
    for(let i = 0; i<dart.length; i++){
        if(+dart[i] >= 0) {
            // 숫자 앞에 숫자가 있으면 무조건 10 push (0 -10사이의 숫자)
            if(typeof(arr[arr.length-1]) === 'number') {
                arr.pop();
                arr.push(10)
            }else{
                // 숫자인 경우 숫자형으로 바꾸어 push
                arr.push(+dart[i])
            }
        }else{
            // 문자인 경우 문자열 그대로 push
            arr.push(dart[i])
        }
    }

    // 문자열 마다 해당 값 계산하여 score 배열에 push
    for(let j = 0; j < arr.length; j++){
        if(arr[j] ==="S"){
            score.push(arr[j-1]);
        }else if(arr[j] === 'D'){
            score.push(arr[j-1]**2);
        }else if(arr[j] === 'T'){
            score.push(arr[j-1]**3);
        }else if(arr[j] === '#'){
            score[score.length-1] *= -1
        }else if(arr[j] === '*'){
            score[score.length-1] *= 2
            score[score.length-2] *= 2
        }
    }
    // 배열 내 3개의 숫자를 합산
    console.log(score[0]+score[1]+score[2])
}
