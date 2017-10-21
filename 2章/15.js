const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

let data = fs.readFileSync('hightemp.txt','utf-8');
 
rl.question('Please write row number:',(n)=>{
    let lines = data.split('\n');
    lines.pop();
    for(let i=n;i>0;i--) console.log(lines[lines.length-i]);     
    rl.close();
})