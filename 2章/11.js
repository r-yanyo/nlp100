const fs=require('fs');

fs.readFile('hightemp.txt','utf-8',(err,data)=>{
    let newdata = data.replace(/\t/g,' ');
    console.log(newdata);
});