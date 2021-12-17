let lottos = [0, 0, 0, 0, 0, 0]
let win_nums =[38, 19, 20, 40, 15, 25]

solution(lottos, win_nums);

function solution (lottos, win_nums) {
    let num = [];
    for(let i = 0; i<lottos.length; i++){
        for(let j= 0; j<win_nums.length;j++){
            if(lottos[i] === win_nums[j]){
                num.push(lottos[i]);
                lottos.splice(i,1);
                win_nums.splice(j,1);
                i--;
                j--;
            }            
        }
    }

    // 0의 갯수
    const zero = lottos.filter(v => v=== 0);

    // 번호가 겹치는 갯수 (최소)
    let min = num.length;
    if(min === 0) min =1; // 갯수가 0,1 일때 같은 순위

    // 번호가 최대로 겹칠 수 있는 갯수
    let max = min + zero.length;
    if(max === 7) max = 6; 

    // 순위 출력
    let result = [7-max, 7-min];
    console.log(result)
}