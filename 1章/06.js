var ngram = function(n,str){
    str = str.replace(/,|\.|\s/g,'');
    var ans=new Array();
    for(var i=0;i<str.length-(n-1);i++){
        ans[i] = '';
        for(var j=0;j<n;j++){
            ans[i] += str[i+j];
        }
    }

    return ans;
}

var x = ngram(2,"paraparaparadise");
var y = ngram(2,"paragraph");
console.log('x:'+x);
console.log('y:'+y);

var t = x.concat(y);
var union = t.filter(function(x,i,self){
    return self.indexOf(x) === i; //重複を削除
})
var intersection = t.filter(function(x,i,self){
    return self.indexOf(x) === i && i !== self.lastIndexOf(x); //重複以外を削除
})
var difference = t.filter(function(x,i,self){
    return intersection.indexOf(x) == -1; //t-intersection
})
console.log('union:'+union);
console.log('intersection:'+intersection);
console.log('difference:'+difference);

console.log('x include \'se\' at:'+ x.indexOf('se'));
console.log('y include \'se\' at:'+ y.indexOf('se'));