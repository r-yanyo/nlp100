const fs = require('fs');

let data = fs.readFileSync('hightemp.txt','utf-8');

let lines = data.split('\n');
lines.pop();
let prefectures = [];
lines.forEach((line,i,array)=>{
    prefectures[line.split('\t')[0]]=1;
});

for(pre in prefectures){
    console.log(pre);
}