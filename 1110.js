let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');

let n = Number(input[0]);

let start = n;
let cnt = 0;

while(1){
  n = n + "";

  if(n < 10){
    n = "0" + n;
  }
  let sum = Number(n[0]) + Number(n[1]) 

  cnt ++;
  n = Number(n[1]) * 10 + sum % 10;
  if(n === start) break;

}
console.log(cnt)
