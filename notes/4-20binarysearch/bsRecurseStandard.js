let myArray = [1, 3, 4, 6, 8, 9, 11];

const binarySearch = (arr, start, end, targetVal) => {
  // base case 1:
  if (start > end) return -1;
  // base case 2:
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === targetVal) return mid;
  // recursive rule
  if (arr[mid] > targetVal) {
    return binarySearch(arr, start, mid - 1, targetVal);
  } else {
    return binarySearch(arr, mid + 1, end, targetVal);
  }
};

console.log(binarySearch(myArray, 0, myArray.length - 1, 6));
