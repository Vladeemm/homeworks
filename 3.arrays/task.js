function compareArrays(arr1, arr2) {
  let result;

  result = arr1.length === arr2.length && arr1.every((arr1, i) => arr1 === arr2[i]);

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  const positiveNumbers = arr.filter((idx) => idx > 0);
    resultArr = positiveNumbers;
  const multipleOfThree = resultArr.filter((idx) => idx % 3 === 0);
    resultArr = multipleOfThree;
  const result = resultArr.map((idx) => idx * 10);
    resultArr = result;

  return resultArr; // array
}
