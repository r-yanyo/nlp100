const fs = require('fs');
fs.readFile('hightemp.txt','utf-8',(err,data)=>{
    let lines = data.split('\n');
    lines.pop(); //最後の空白を除く
    const col1 = fs.createWriteStream('./col1.txt');
    const col2 = fs.createWriteStream('./col2.txt');
    lines.forEach((line)=>{
        let block = line.split(/\s/);
        col1.write(block[0]+'\n');
        col2.write(block[1]+'\n');
    })
    col1.end();
    col2.end();
});