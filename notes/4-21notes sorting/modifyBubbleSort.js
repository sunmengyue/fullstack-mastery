function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    // i is the number of iterations, not index
    // the number at the last index is sorted, so we don't need to compare with the last index each round. The comparing range id deacreasing in each i loop
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  console.log(arr);
  return arr;
}

bubbleSort([2, 3, 1, 5, 9]);
