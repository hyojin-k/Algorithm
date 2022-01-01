let s ="23four5six7"

solution(s);

// 정규 표현식 사용

function solution (s) {
    const num = [0,1,2,3,4,5,6,7,8,9];
    const eng = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let result = s;

    for(let i = 0; i<10; i++){
        // 중복되는 문자 전부 바꾸기 위한 정규표현식
        let reg = new RegExp(eng[i], 'g')

        if(result.includes(eng[i])){
            result = result.replace(reg,num[i])
        }
    }
    console.log(+result)
}


// split, join 조합 사용

function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i=0; i< numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }
    console.log(Number(answer));
}
