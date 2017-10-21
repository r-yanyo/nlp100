var typoglycemia = function(str){
    var words = str.replace(/,|:|\./,'').split(' ');
    for(word in words){
        if(word.length > 4){
            word = this.shuffle(word);
        }
    }

    var shuffle = function(midWord){
        var len = midWord.length-2;
        while(m){
            var rand = Math.floor(Math.random()* len--)+1;
            midWord.charAt(rand) 
        }
        return ;
    }
};

//作成途中