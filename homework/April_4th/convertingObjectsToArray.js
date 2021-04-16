// 1. object -> array
function toArray(obj) {
  let arr = [];
  // iterate an object
  for (let key in obj) {
    arr.push([key, obj[key]]);
  }
  return arr;
}

console.log(toArray({}));
console.log(toArray({ a: 1, b: 2 }));
console.log(toArray({ shrimp: 15, tots: 12 }));

// 2. array -> obj
function toObject(nestedArr) {
  // [[a, 1], [b, 2]] -> {a: 1, b:2}
  let obj = {};
  for (let i = 0; i < nestedArr.length; i++) {
    obj[nestedArr[i][0]] = nestedArr[i][1];
  }
  return obj;
}

console.log(
  toObject([
    ['a', 1],
    ['b', 2],
  ]),
);
console.log(toObject([]));
console.log(
  toObject([
    ['shrimp', 15],
    ['tots', 12],
  ]),
);
