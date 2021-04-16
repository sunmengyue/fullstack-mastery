// 1. if one of the objects is nested
function compareNested(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

console.log(
  compareNested(
    { a: 1, b: { c: { d: { e: 1 } } } },
    { a: 1, b: { c: { d: { e: 1 } } } },
  ),
);

// 2. if none of the objects is nested
function compare(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  if (keys1.length != keys2.length) return false;
  for (key of keys1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
}

console.log(compare({ a: 1, b: 2 }, { c: 1, b: 2 }));
