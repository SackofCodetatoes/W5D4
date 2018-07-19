Array.prototype.uniq = function(array) {
  let result = [];

  for (let i = 0; i < this.length; i++){
    if (result.includes(this[i])){
      continue;
    }
    result.push(this[i]);
  }
  return result;
};

Array.prototype.twoSum = function() {
  let result = [];
  for (let i = 0; i < this.length - 1; i++){
    if(this[i] + this[i+1] == 0){
      result.push([i, i+1]);
      // console.log('We added');
    }
  }
  return result;
};

Array.prototype.transpose = function(array) {
  let result = [];
  for(let j = 0; j < this.length; j++){
    let row = [];
    for (let i = 0; i < this[j].length; i++){
      row.push(this[i][j]);
    }
    result.push(row);
  }
  return result;
};
