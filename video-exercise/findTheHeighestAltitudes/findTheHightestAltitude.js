function findHeighestAltitude(gain) {
  // get the points array
  let points = [];
  points.push(0);
  for (let i = 0; i < gain.length; i++) {
    points[i + 1] = points[i] + gain[i];
  }
  // find the heighest altitude
  let heighestAlt = points[0];
  for (let i = 1; i < points.length; i++) {
    if (points[i] > heighestAlt) {
      heighestAlt = points[i];
    }
  }
  console.log(heighestAlt);
  return heighestAlt;
}

findHeighestAltitude([-4, -3, -2, -1, 4, 3, 2]);
