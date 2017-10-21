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
    let rowNum = Math.ceil((lines.length/n));
    for(let i=0;i<n;i++){
        let data = lines.splice(0,rowNum).join('\n');
        fs.writeFileSync('hightemp'+(i+1)+'.txt',data,'utf-8');
    }
    rl.close();
})