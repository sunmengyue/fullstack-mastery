const findRichest = (accounts) => {
  // get each sum of the accounts
  let clientTotals = [];
  for (let i = 0; i < accounts.length; i++) {
    let total = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      total += accounts[i][j];
    }
    clientTotals.push(total);
  }
  let max = clientTotals[0];
  for (let i = 1; i < clientTotals.length; i++) {
    if (clientTotals[i] > max) max = clientTotals[i];
  }
  return max;
};

console.log(
  findRichest([
    [1, 2, 3],
    [3, 2, 1],
  ]),
);

console.log(
  findRichest([
    [1, 5],
    [7, 3],
    [3, 5],
  ]),
);
