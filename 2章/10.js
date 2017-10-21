const fs = require('fs');
fs.readFile('hightemp.txt','utf-8',(err,data)=>{
    let lines = data.split('\n');
    console.log(lines.length-1); //最後に空白の要素があるため-1する。
});