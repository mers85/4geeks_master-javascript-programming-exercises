// Write your function here
function getFirstElementOfProperty(obj, key){
    return obj[key][0];
}

var obj = {
 key: [1, 2, 4]
};
var output = getFirstElementOfProperty(obj, 'key');
console.log(output);