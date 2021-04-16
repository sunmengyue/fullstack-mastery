const findUnique = (array1, array2) => {
  let uniqueArr = [];
  let found;

  function compaire(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
      found = false;
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
          found = true;
        }
      }
      if (!found) {
        uniqueArr.push(arr1[i]);
      }
    }
  }
  compaire(array1, array2);
  compaire(array2, array1);
  return uniqueArr;
};

console.log(findUnique([1, 2, 3], [4, 5, 6]));
