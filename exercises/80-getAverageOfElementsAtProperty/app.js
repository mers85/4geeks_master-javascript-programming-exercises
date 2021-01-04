// Write your function here
function getAverageOfElementsAtProperty(obj, key){
    var average = 0;
    var elements = obj[key];
    var total= 0;
    if (elements == undefined | elements == !Array.isArray(elements)){
        return average = 0
    }else {
        for(var i=0; i < elements.length; i++){
        total += elements[i];
        
        }
        return average = total/elements.length
    }
}
var obj = {
  key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output);