Array.prototype.myEach = function(callBack) {
  for(let i = 0; i < this.length; i++){
    callBack(this[i]);
  }
};

Array.prototype.myMap = function(callBack) {
  let result = [];
  for(let i = 0; i < this.length; i++){
    result.push(callBack(this[i]));
  }
  return result;
};

Array.prototype.myReduce = function(callBack, initialValue) {
  let result = 0;
  if (initialValue == false){
    result = initialValue;
  }
  this.myEach(el => {
    result = callBack(result, el);
  });
  // for(let i = 0; i < this.length; i++){
  //   result = callBack(result, this[i]);
  // }
  return result;
};
