// Write your function here
function select(arr, obj){
    newObj = {};
    for(var i = 0; i < arr.length; i++ ){
        for (key in obj) {
            if (key == arr[i]){
                newObj[key] = obj[key]
            }
        }
    }
   return newObj;
}

var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
console.log(select(arr, obj));