// Write your function here
function countAllCharacters(str){
    var freq = {};
    for(var i = 0; i < str.length; i++){
        var character = str[i];
        if(freq[character]){
            freq[character]++;
        }else{
            freq[character] = 1;
        }

    }
    return freq;
}

var output = countAllCharacters('banana');
console.log(output);