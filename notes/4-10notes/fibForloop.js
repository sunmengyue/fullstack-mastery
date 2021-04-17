function getFibo(n) {
  if (n === 0 || n === 1) return n;
  let prev2step = 0;
  let prev1step = 1;
  let cur;
  for (let i = 2; i <= n; i++) {
    cur = prev1step + prev2step;
    prev2step = prev1step;
    prev1step = cur;
  }
  return cur;
}

console.log(getFibo(2));
