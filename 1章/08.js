var cipher = function(str){
    var ans = '';
    for(var i=0;i<str.length;i++){
        if(str[i] === str[i].toLowerCase()){
            ans += String.fromCharCode(219 - str.charCodeAt(i));
        }
        else ans += str[i];
    }
    return ans;
}

console.log(cipher("AIUEbKAKikuKekO"));