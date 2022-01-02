const n = 5;
const arr1 = [9, 20, 28, 18, 11];
const arr2 = [30, 1, 21, 17, 28];

solution(n, arr1, arr2);

function solution(n, arr1, arr2) {
  let numArr1 = [];
  let numArr2 = [];
  let result = "";
  let array = [];

  // 2진수로 바꾸기
  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j < n; j++) {
      if (numArr1.length !== n) {
        if (arr1[j] - 2 ** i < 0 || arr1[j] === 0) {
          numArr1.push("0");
        } else {
          arr1[j] -= 2 ** i;
          numArr1.push("1");
        }
      } else {
        if (arr1[j] - 2 ** i < 0 || arr1[j] === 0) {
          numArr1[j] += 0;
        } else {
          numArr1[j] += 1;
          arr1[j] -= 2 ** i;
        }
      }

      if (numArr2.length !== n) {
        if (arr2[j] - 2 ** i < 0 || arr2[j] === 0) {
          numArr2.push("0");
        } else {
          arr2[j] -= 2 ** i;
          numArr2.push("1");
        }
      } else {
        if (arr2[j] - 2 ** i < 0 || arr2[j] === 0) {
          numArr2[j] += 0;
        } else {
          numArr2[j] += 1;
          arr2[j] -= 2 ** i;
        }
      }
    }
  }

  // 숫자 일치/불일치 판별하기
  for (let k = 0; k < n; k++) {
    for (let l = 0; l < n; l++) {
      if (numArr1[k][l] == 0 && numArr2[k][l] == 0) {
        result += " ";
      } else {
        result += "#";
      }
    }
    array.push(result);
    result = "";
  }
  console.log(array);
}


// 비트 연산자, toString(2), padStart() 사용

var solution = (n,arr1,arr2) => arr1.map((a,i) => (a|arr2[i]).toString(2).padStart(n,0).replace(/0/g,' ').replace(/1/g,'#'))