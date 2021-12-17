const { notEqual } = require("assert");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
console.log(input)

// 노드 갯수
const N = +input[0]
// 노드 구성
input = input.slice(1)

const tree = {}
for(let i = 0; i<N; i++){
    const [node, left, right] = input[i].split(' ');
    // tree의 키 값으로 node 저장, 값으로 left, right가 담긴 배열 저장
    tree[node] = [left, right.trim()]
}
console.log(tree)

let result = '';

// 전위 순회 (루트-왼쪽-오른쪽)
function preorder(node) {
    if(node === '.') return;
    const [lt, rt] = tree[node];
    result += node;
    preorder(lt);
    preorder(rt);
}

// 중위 순회 (왼쪽-루트-오른쪽)
function inorder(node){
    if(node==='.') return;
    const [lt, rt] = tree[node];
    inorder(lt);
    result+=node;
    inorder(rt);
}

// 후위 순회 (왼쪽-오른쪽-루트)
function postorder(node) {
    if(node === '.') return;
    const [lt, rt] = tree[node];
    postorder(lt);
    postorder(rt);
    result +=node;
}

preorder('A');
result += '\n';
inorder('A');
result += '\n';
postorder('A')

console.log(result)