var str = "Now I need a drink, alcoholic of course, after the heavy lectures involving quantum mechanics.";
var ans = str.replace(/,|\./g,'').split(' '); //replaceとかsplitをしてもstr自体は変わらない。
for(var i=0;i<ans.length;i++){
    console.log(ans[i].length);
}