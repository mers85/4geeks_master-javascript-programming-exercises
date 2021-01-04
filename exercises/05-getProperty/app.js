function getProperty(obj, key) {
  // your code here
  if (obj[key]  !== "undefined"){
        return obj[key]
  }else{
      return undefined
  }
}

var car = {
  model: 'Toyota'
};

var output = getProperty(car, 'model');
console.log(output);