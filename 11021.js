let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');

let n = Number(input[0]);

for(i = 1; i <= n; i++){
  let data = input[i].split(' ')
  let a = Number(data[0])
  let b = Number(data[1])
  console.log(`Case #1: ${a + b}`)
}
