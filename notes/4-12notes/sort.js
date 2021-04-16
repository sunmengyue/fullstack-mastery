function sum(n) {
  if (n === 0) return 0;
  return n + sum(n - 1);
}

console.log(sum(10));

let array = [1, 2, 4, 3, 2, 5, 6];
function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
console.log(sort(array));
