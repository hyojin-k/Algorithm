const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = +input.shift();

for (let i = 0; i < T; i++) {
  const [x1, y1, r1, x2, y2, r2] = input[i].split(' ').map(Number);

  const disX = x1 - x2;
  const disY = y1 - y2;

  const rsum = (r1 + r2) ** 2;
  const rsub = (r2 - r1) ** 2;
  const dis = disX ** 2 + disY ** 2;

  if (dis === 0) {
    if (r1 === r2) {
      console.log(-1);
    } else {
      console.log(0);
    }
  } else {
    if (dis > rsum || dis < rsub) {
      console.log(0);
    } else if (dis === rsum || (dis === rsub && dis !== 0)) {
      console.log(1);
    } else if (dis < rsum && dis > rsub) {
      console.log(2);
    }
  }
}
