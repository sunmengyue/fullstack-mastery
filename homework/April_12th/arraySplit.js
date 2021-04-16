let dataArray = [1, 2, 3, 4, 5, 6, 7];

function makeChunk(arr, number) {
  let matrix = [];
  let mtIdx = -1; // matrix index start from before the array
  for (let i = 0; i < dataArray.length; i++) {
    // create a new nested [] in matrix after "numer" elements
    if (i % number === 0) {
      mtIdx++;
      matrix[mtIdx] = [];
    }
    // push data array one by one to their corresponding nested arrays
    matrix[mtIdx].push(arr[i]);
  }
  return matrix;
}

console.log(makeChunk(dataArray, 4));
