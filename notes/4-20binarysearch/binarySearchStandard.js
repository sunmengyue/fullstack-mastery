let myArr = [2, 5, 7, 8, 13, 26, 46, 78];

function binarySearch(arr, val) {
  let start = 0;
  let end = myArr.length - 1;
  let mid;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (myArr[mid] === val) {
      return mid;
    } else if (myArr[mid] < val) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearch(myArr, 54));
