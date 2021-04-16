const comparingObjects = (obj1, obj2) => {
  // get key value pairs arrays, eg: [ [ 'a', 1 ], [ 'b', 1 ] ]
  let pair1 = Object.entries(obj1);
  let pair2 = Object.entries(obj2);
  console.log(pair2);
  if (obj1.length !== obj2.length) return false;
  // compare each key and each value
  for (let i = 0; i < pair1.length; i++) {
    for (let j = 0; j < pair1[i].length; j++) {
      if (pair1[i][j] !== pair2[i][j]) return false;
    }
  }
  return true;
};

comparingObjects({ a: 1, b: 1 }, { a: 1, b: { e: 4 } });
