// Write your function here
function findMinLengthOfThreeWords(a,b,c){
    
    return Math.min(a.length , b.length, c.length);
}

var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output);