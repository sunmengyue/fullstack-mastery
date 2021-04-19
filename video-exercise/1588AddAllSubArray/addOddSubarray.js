const myArray = [1, 2, 53, 235, 643, 231];

const addOddSubArr = (arr) => {
  let sum = 0;
  for (let oddNumber = 1; oddNumber <= arr.length; oddNumber += 2) {
    for (let i = 0; i + oddNumber <= arr.length; i++) {
      let subArr = arr.slice(i, i + oddNumber);
      for (let j = 0; j < subArr.length; j++) {
        sum += subArr[j];
      }
    }
  }
  console.log(sum);
  return sum;
};

addOddSubArr(myArray);
