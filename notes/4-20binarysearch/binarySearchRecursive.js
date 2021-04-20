let myArray = [1, 3, 4, 6, 8, 9, 11];

function binarySearchRecurseively(arr, val, left = 0, right = 0) {
  let mid = Math.floor((left + right) / 2);
  if (arr[mid] === val) return mid;
  if (val < arr[mid]) {
    return binarySearchRecurseively(arr, val, left, mid - 1);
  } else if (val > arr[mid]) {
    return binarySearchRecurseively(arr, val, left + 1, right);
  } else {
    return -1;
  }
}

console.log(binarySearchRecurseively(myArray, 11));
