let board = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]];
let moves = [1,5,3,5,1,2,1,4];

solution(board, moves);

function solution (board, moves) {
    let bucket = [];
    let result = 0;

    for(let i = 0; i<moves.length; i++){
        // 번호를 인덱스 값으로 찾기 위해 -1
        const num = moves[i]-1;

        for(let j = 0; j<board.length; j++){
            if(board[j][num]!==0){
                bucket.push(board[j][num]);
                board[j][num] = 0;

                // bucket에 연속된 두수가 있는 경우 삭제
                if(bucket[bucket.length-1] === bucket[bucket.length-2]){
                    bucket.splice(-2);
                    result += 2;
                }
                break;
            }
        }
    }
    console.log(result)
}