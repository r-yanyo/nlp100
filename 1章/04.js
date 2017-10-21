var str = "Hi He Lied Because Boron Could Not Oxidize Fluorine. New Nations Might Also Sign Peace Security Clause. Arthur King Can.";
var word = str.replace('.','').split(' ');
var mNum = [1,5,6,7,8,9,15,16,19];
var ans = new Array();

for(var i=1;i<=word.length;i++){
    if(mNum.indexOf(i)>=0) word[i-1] = word[i-1].slice(0,1);
    else word[i-1] = word[i-1].slice(0,2);
    ans[word[i-1]] = i;
}

console.log(ans);
