function range(start, end) {
  result = [start];
  if (start === end){
    return result;
  }
  return result.concat(range(start + 1, end));
}

function sumRec(array) {
  sum = array.pop();
  if(array.length < 1){
    return sum;
  }
  return sum + sumRec(array);
}

function exponent(base, exp){
  if(exp === 0){
    return 1;
  }

  return base * (exponent(base, exp - 1));
}

function fibonacci(n){
  let numbers = [];
  if (n === 1){
    numbers.push(0);
    return numbers;
  }
  if (n === 2){
    numbers.push(1);
    return fibonacci(n-1).concat(numbers);
  }
  numbers = fibonacci(n-1);
  return numbers.concat([numbers[numbers.length-1] + numbers[numbers.length - 2]]);
}

function deepDup(array){
  let result = [];
  array.forEach(function(el){
    if(typeof(el) === Array){
      result.push(deepDup(el));
    }
    else{
      result.push(el);
    }
  });
  return result;
}

function bsearch(array, target){
  if(array.length < 1){
    return -1;
  }
  let middle = Math.floor(array.length / 2);

  if(array[middle] == target){
    return middle;
  }

  else if(target < array[middle]){
    return bsearch(array.slice(0, middle), target);
  }

  else {
    let index = bsearch(array.slice(middle + 1, array.length), target);
    if(index == -1){
      return index;
    }
    return index += middle;
  }
}

function mergesort(array){
  if(array.length < 2){
    return array;
  }
  let middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);
  return merger(mergesort(left), mergesort(right));
}

function merger(left, right){
  let result = [];
  while ((left.length != 0) && (right.length != 0)){
    if(left[0] < right[0]) {
      result.push(left.shift());
    }
    else{
      result.push(right.shift());
    }
  }
  return result.concat(left).concat(right);
}
