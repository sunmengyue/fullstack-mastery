function findHeighestAlt(gain) {
  let alt = 0;
  let max = 0;
  for (let i = 0; i < gain.length; i++) {
    alt += gain[i];
    if (alt > max) {
      max = alt;
    }
  }
  return max;
}

console.log(findHeighestAlt([-5, 1, 5, 0, -7]));
