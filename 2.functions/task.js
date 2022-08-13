// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = arr[0];
  max = arr[0];
  sum = 0;
  avg = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i] 
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }   
    avg = Number((sum / arr.length).toFixed(2));
  }

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum;

  sum = 0;
    for (let i = 0; i < arr.length; i++) {
     sum += arr[i];
    }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  max = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    let sum = func(arrOfArr[i]);
     if (sum > max) {
      max = sum;
    }
  }
  
  return max;
}

// Задание 3
function worker2(arr) {
  let min = Infinity;
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } 
    if (arr[i] > max) {
      max = arr[i];
    }   
  }
  return Math.abs(max - min);
}
