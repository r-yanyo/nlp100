const fs = require('fs');

const file = fs.readFileSync('jawiki-country.json','utf-8');

let jsons = file.split('\n');
jsons.pop();

let british;
jsons.forEach((val,index,array)=>{
    let json = JSON.parse(val);
    let title = json.title;
    if(title === 'イギリス') british = json;
});

//section 20
let article = british.text.split('\n');

//section 21
let categories = [];
article.forEach((val,index,array)=>{
    if(val.match(/Category/)) categories.push(val);
});

//section22
const categoryNameRegex = /^\[\[Category:(.*?)(\|\*)?\]\]$/;
let categoryNames = [];
categories.forEach((val,index,array)=>{
    categoryNames.push(val.match(categoryNameRegex));
});

categoryNames.forEach((val,index,array)=>{
    //console.log(val[1]);
});

//section23
const sectionLevelRegex = /(={2,})\s?(.+?)\s?(={2,})/;
let sections = [];
article.forEach((val,index,array)=>{
    let match = val.match(sectionLevelRegex);
    if(match) sections.push(match);
});

let newSections = [];
sections.forEach((val,index,array)=>{
    let obj = {'Name': val[2],'num': val[1].length-1};
    newSections.push(obj);
});
//console.log(newSections);

//section24
const mediaFileRegex = /(File|ファイル):(.*?)\|/g;
let mediaFiles = british.text.match(mediaFileRegex);
//console.log(mediaFiles);

//section25
const templateRegex = /\|?(.*?)\s=\s((.|\n)*?|)(\n)(\||})/g;
let templates = [];
let match = [];
while((match = templateRegex.exec(british.text)) !== null){
    templates.push({
        'template name': match[1],
        'value': match[2]
    })
}
//console.log(templates);

//section26
templates.forEach((val,index,array)=>{
    val.value = val.value.replace(/\'/g,'');
});
//console.log(templates);

//section27
let internalLinkRegex = /\[\[(?!ファイル:|file:)(.*?)(#(.*?))?(\|(.*?))?\]\]/g;
templates.forEach((val,index,array)=>{
    while((match = internalLinkRegex.exec(val.value)) !== null){
        val.value = val.value.replace(internalLinkRegex,match[5]||match[1]);
    }
});
//console.log(templates);

//section29
let query = '?'+'action=query' + '&prop=imageinfo' + '&iiprop=url' + '&format=json' + '&titles=File:';
templates.find((val,index,obj)=>{
    if(val['template name'] == '国旗画像') query += val.value.replace(/\s/g,'%20');
})
const https = require('https');
const options = {
    protocol: 'https:',
    host: 'commons.wikimedia.org',
    path: '/w/api.php' + query
}
let body = '';
let resUrl;
const req = https.request(options,(res)=>{
    res.setEncoding('utf8');
    res.on('data',(chunk)=>{
        body += chunk;
    });
    res.on('end',()=>{
        resUrl = JSON.parse(body).query.pages['347935'].imageinfo[0].url;
        console.log(resUrl);
    });
});
req.end();