// Write your function here
function getAllElementsButNth(array, element){
    return array.splice(element);
    
}
var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); 