let numbers = [1,1,1,1,1];
let target = 3;

solution(numbers, target);

// 알고리즘 - 깊이/너비 우선 탐색 (DFS/BFS)

function solution (numbers, target) {
    let answer = 0;

    dfs(0,0);
    
    function dfs(index, sum) {
        // 마지막 인덱스까지 가면 상위 노드로 이동
        if(index === numbers.length){
            if(sum === target) {
                answer++;
            }
            return;
        }

        // + 자식 노드 탐색
        dfs(index + 1, sum + numbers[index]);
        // - 자식 노드 탐색
        dfs(index + 1, sum - numbers[index]);
    }
    return answer;
}

