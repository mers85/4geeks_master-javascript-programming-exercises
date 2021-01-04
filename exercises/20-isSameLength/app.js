// Write your function here
function isSameLength(word1, word2){
    let a = word1.length;
    let b = word2.length;
    if (a === b){
      return true
    }else{
      return false
    }
}

var output = isSameLength('words', 'super');
console.log(output);