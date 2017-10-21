const fs = require('fs');

fs.readFile('col1.txt','utf-8',(err,data1)=>{
    let lines1 = data1.split('\n');
    fs.readFile('col2.txt','utf-8',(err,data2)=>{
        let lines2 = data2.split('\n');
        let lines3 = [];
        for(i in lines1){
            lines3.push(lines1[i]+'\t'+lines2[i]);
        }
        let data3 = lines3.join('\n');
        fs.writeFileSync('hightemp_paste_node.txt',data3);
    });
});