const fs = require('fs');
const Mecab = require('mecab-async');
const mecab = new Mecab();

fs.readFile('neko.txt','utf8',(err,data)=>{
    let line = data.split('\n');
    line.forEach((value,index,array)=>{  
        mecab.parse(value,(err,result)=>{
            if(err){
                console.error(err);
                process.exit();
            }
        });
    });
});
