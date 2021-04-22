let myArray = [1, 3, 4, 6, 8, 9, 11];

const binarySearch2 = (arr, targetVal, start = 0, end = arr.length - 1) => {
  // base case 1:
  if (start > end) return -1;
  // base case 2:
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === targetVal) return mid;
  // recursive rule
  if (arr[mid] > targetVal) {
    return binarySearch2(arr, targetVal, start, mid - 1);
  } else {
    return binarySearch2(arr, targetVal, mid + 1, end);
  }
};

console.log(binarySearch2(myArray, 3));
