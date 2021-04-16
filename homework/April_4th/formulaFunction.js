function fiftyThirtyTwenty(income) {
  return {
    Needs: income * (1 / 2),
    Wants: income * (3 / 10),
    Savings: income * (1 / 5),
  };
}

console.log(fiftyThirtyTwenty(10000));
