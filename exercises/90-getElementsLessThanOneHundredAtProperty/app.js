// Write your function here
function getElementsLessThan100AtProperty(obj, key){
    result = []
    array= obj.key

    if(Array.isArray(array)){
        for(let i = 0; i < array.length; i++ ){
            if(obj.key[i] < 100){
                result.push(obj.key[i])
            }
        }
    }
    return result;
}

var obj = {
  key: [1000, 20, 50, 500]
};
var output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output);