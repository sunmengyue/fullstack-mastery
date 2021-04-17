function fiboRecurse(n) {
  if (n === 0 || n === 1) return n;
  return fiboRecurse(n - 2) + fiboRecurse(n - 1);
}

console.log(fiboRecurse(5));
