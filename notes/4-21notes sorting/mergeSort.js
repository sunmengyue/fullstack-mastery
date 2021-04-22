function merge(arr1, arr2) {
  let sortedArr = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      sortedArr.push(arr1[i]);
      i++;
    } else {
      sortedArr.push(arr2[j]);
      j++;
    }
  }
  // whichever array has left elements, push them in the sorted array
  while (i < arr1.length) {
    sortedArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    sortedArr.push(arr2[j]);
    j++;
  }
  return sortedArr;
}

// 2. recursion part
function mergeSort(arr) {
  // base case
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  // merge and return
  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([1, 3, 0, 4, 2, 6]));
