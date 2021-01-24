// Write your function here

function addToFrontOfNew(array, element){
    let newArray = [];
   
    for(var i = 0; i < array.length; i++ ){
        newArray.push(array[i])
    }
    newArray.unshift(element);
    return newArray;
}

var input = [1, 2];
var output = addToFrontOfNew(input, 3);
console.log(output);
console.log(input);