const fs = require('fs');
let data = fs.readFileSync('hightemp.txt','utf-8');
let lines = data.split('\n');
lines.pop();
lines.sort((a,b)=>{
    let val1 = a.split('\t')[2];
    let val2 = b.split('\t')[2];
    return val2 - val1;
});

console.log(lines.join('\n'));