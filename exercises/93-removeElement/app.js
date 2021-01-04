// Write your function here
function removeElement(arr, param){
    var newArray = [];
    newArray.push(...arr);
    for(var i = 0; i < arr.length; i++){
        if(newArray[i] === param){
            newArray.splice(i, 1);
        
        }
    }
    return newArray;
}
var output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]