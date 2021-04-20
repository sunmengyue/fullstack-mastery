let myArray = [1, 3, 4, 6, 8, 9, 11];

function binarySearch(arr, val) {
  let mid = Math.floor(arr.length / 2);
  // base case
  if (arr[mid] === val) return true;
  if (arr.length === 1 && arr[mid] !== val) return false;

  // recursive rule
  if (arr[mid] < val) {
    return binarySearch(arr.slice(mid + 1), val);
  } else {
    return binarySearch(arr.slice(0, mid), val);
  }
}

console.log(binarySearch(myArray, 11));
