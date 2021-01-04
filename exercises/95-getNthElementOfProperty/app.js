// Write your function here
function getNthElementOfProperty(obj, key, num){
    return obj.key[num];
}

var obj = {
  key: [1, 2, 6]
};
var output = getNthElementOfProperty(obj, 'key', 4);
console.log(output);