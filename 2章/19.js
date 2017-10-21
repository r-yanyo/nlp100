const fs = require('fs');

let data = fs.readFileSync('hightemp.txt','utf-8');

let lines = data.split('\n');
lines.pop();
let prefectures = [];
lines.forEach((line,i,array)=>{
    if(!prefectures[line.split('\t')[0]]) prefectures[line.split('\t')[0]] = 1;
    else prefectures[line.split('\t')[0]] += 1;
});

let newArray = [];

for(key in prefectures){
    newArray.push(key);
}

newArray.sort((a,b)=>{
    return prefectures[b] - prefectures[a];
});

console.log(newArray.join('\n'));