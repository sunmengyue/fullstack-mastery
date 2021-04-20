let myArr = [1, 2, 33, 45, 57, 68];

function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);
  while (arr[mid] !== val && start <= end) {
    if (arr[mid] < val) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  return arr[mid] === val ? mid : -1;
}

console.log(binarySearch(myArr, 33));
