// fibonacci sequence
function getFibonacci(n) {
  if (n === 0 || n === 1) return n; // n =0 return 0, n = 1 return 1;
  return getFibonacci(n - 1) + getFibonacci(n - 2);
}
console.log(getFibonacci(7));
// 0 1 1 2 3 5 8 13 21

// diagnal difference
// 1 2 3
// 4 5 6
// 7 8 9
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];

// for loop solution
function loopAbsDiff(arr) {
  let col = arr[0].length - 1; // maximum index of column is 2
  let diag1Sum = 0;
  let diag2Sum = 0;
  for (let i = 0; i < arr.length; i++) {
    diag1Sum += arr[i][i];
    diag2Sum += arr[i][col - i]; // row index + col index = 2
  }
  return Math.abs(diag1Sum - diag2Sum);
}

console.log(loopAbsDiff(matrix));

// recursion
const recurseAbsDiff = (array) => {
  // the max row and col index are 2
  let row = array.length - 1;
  let col = array[0].length - 1;

  // get the first diagnal sum where row index always equals to column index
  function getDiag1Sum(r) {
    if (r === 0) return matrix[0][0];
    return matrix[r][r] + getDiag1Sum(r - 1, r - 1);
  }

  function getDiag2Sum(r) {
    if (r === 0) return matrix[0][col - r];
    return matrix[r][col - r] + getDiag2Sum(r - 1, col - r + 1);
  }

  let sum1 = getDiag1Sum(row);
  let sum2 = getDiag2Sum(row);
  return Math.abs(sum1 - sum2);
};

console.log(recurseAbsDiff(matrix));
