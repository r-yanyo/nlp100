/*ansは'文字'と'回数'のプロパティを持つオブジェクトにした方がいい*/

var ngram = function(n,str){
    str = str.replace(/,|\.|\s/g,'');
    var ans=new Array();
    for(var i=0;i<str.length-(n-1);i++){
        ans[i] = '';
        for(var j=0;j<n;j++){
            ans[i] += str[i+j];
        }
    }

    console.log(ans);
}

ngram(3,"I am an NLPer");