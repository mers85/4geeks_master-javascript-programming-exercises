// Write your function here
function computeAverageOfNumbers(arr){
    let numOfele = arr.length;
    let sum = arr.reduce((previous, current) => current += previous);
    let avg = sum / numOfele;
    return avg;
}

var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output);