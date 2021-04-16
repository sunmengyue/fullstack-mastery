let array = [33, 21, 14, 3, 21, 21, 334, 579, 34, 565, 4345, 3978, 3];

function removeDups(arr) {
  let dup;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    dup = false;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        dup = true;
      }
    }
    if (!dup) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
  return newArr;
}

removeDups(array);
