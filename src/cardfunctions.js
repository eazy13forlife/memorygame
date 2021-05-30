//function that takes an array and returns a new array with its values in a different index
const returnRandomizedArray = (originalArray) => {
  let randomizedArray = [];
  pushRandomValue(originalArray, randomizedArray);
  return randomizedArray;
};

//recursive function that takes in a currentArray and an empty array and pushes a random value from the currentArray to the the empty array. We keep calling this function until all the values from the currentArray have been pushed into the empty array.
const pushRandomValue = (currentArray, resultArray) => {
  if (currentArray.length === 1) {
    resultArray.push(currentArray[0]);
    return resultArray;
  }
  let start = 0;
  let end = currentArray.length - 1;
  let index = Math.ceil(Math.random() * (end - start)) + start;
  let currentArrayValue = currentArray[index];
  resultArray.push(currentArrayValue);
  const newCurrentArray = currentArray.filter((item, index) => {
    if (item !== currentArrayValue) {
      return true;
    } else {
      return false;
    }
  });
  pushRandomValue(newCurrentArray, resultArray);
};

export default returnRandomizedArray;
