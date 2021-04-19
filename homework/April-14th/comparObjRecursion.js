const compareDeep = (obj1, obj2) => {
  // helper function check if obj is written in object literal
  function isObj(obj) {
    return obj.constructor === Object;
  }
  // return an array of keys in obj1 and obj2
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    let val1 = obj1[key];
    let val2 = obj2[key];
    let bothObjs = isObj(val1) && isObj(val2);
    // if one of val1 and val2 is object, return false
    if (!bothObjs) return false;
    // base case: if the values are both primitive, return a boolean
    if (typeof val1 !== 'object' && typeof val2 !== 'object') {
      return val1 === val2; // return when a false only
    }
    // recursion rule: if both of them are objects, check deeply
    if (bothObjs) {
      compareDeep(val1, val2);
    }
  }
  // base case : done
};

let object1 = { h: 'i', a: { b: { c: { d: 'e' } } }, f: { g: 'h' } };
let object2 = { h: 'i', a: { b: { c: { d: 'e' } } }, f: { g: 'h' } };

console.log(compareDeep(object1, object2));
