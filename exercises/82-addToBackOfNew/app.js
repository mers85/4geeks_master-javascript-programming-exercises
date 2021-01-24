// Write your function here
function addToBackOfNew(array, element){
    let newArray = [];
   
    for(let i = 0; i < array.length; i++ ){
        newArray.push(array[i])
    }
    newArray.push(element);
    return newArray;
}

var input = [1, 2];
var output = addToBackOfNew(input, 3);
console.log(input); 
console.log(output);