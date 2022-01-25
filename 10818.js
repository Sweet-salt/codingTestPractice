let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');

let n = Number(input[0]);

let data = input[1].split(' ').map(x => Number(x));

// let minValue = 1000000;
// let maxValue = -1000000;

// for (let i = 0; i < n; i++){
//   let curValue = data[i]
//   if(curValue < minValue) minValue = curValue;
//   if(curValue > maxValue) maxValue = curValue;
// }
// console.log(minValue + " " + maxValue);

// 2번째 방법 reducer사용해서 풀기
let minValue = data.reduce((a,b) => Math.min(a, b));
let maxValue = data.reduce((a,b) => Math.max(a, b));

console.log(minValue + " " + maxValue);
