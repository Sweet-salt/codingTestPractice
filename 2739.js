let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');

let x = Number(input[0]);

for (i = 1; i <= 9; i++){
  console.log(`${x} * ${i} = ${x * i}`)
}
