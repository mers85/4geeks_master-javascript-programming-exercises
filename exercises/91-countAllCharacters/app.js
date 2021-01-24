// Write your function here
function countAllCharacters(str){
    let freq = {};
    for(let i = 0; i < str.length; i++){
        let character = str[i];
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