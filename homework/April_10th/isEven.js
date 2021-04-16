// Check is a number even or odd recursively
const isEven = (n) => {
  if (n === 0) return true;
  if (n > 0) {
    return !isEven(n - 1); // n is positive
  } else {
    return !isEven(n + 1); // n is negative
  }
};

console.log(isEven(-2));
