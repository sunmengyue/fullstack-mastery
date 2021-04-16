// Sum up all values in an array recursively
const sumUp = (arr) => {
  if (arr.length === 0) return 0;
  return arr[arr.length - 1] + sumUp(arr.slice(0, -1));
};

console.log(sumUp([1, 2, 3, 4, 6, 4, 6]));

/* ---------------------------------------------------------------------- */
const sumUp2 = (arr, n) => {
  // n is the number of elements in the array
  if (n === 0) return 0;
  return arr[n - 1] + sumUp2(arr, n - 1);
};

console.log(sumUp2([1, 2, 3, 4, 6, 4, 6], 7));
