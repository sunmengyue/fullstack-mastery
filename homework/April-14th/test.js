const compareDeep = (object1, object2) => {
  function isObject(obj) {
    return obj.constructor === Object;
  }

  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  let result = true;

  for (let key of keys1) {
    let val1 = object1[key];
    let val2 = object2[key];
    let areObjects = isObject(val1) && isObject(val2);
    // if any of the value is not object and they are not equal
    // or if they are object , but they are not equal (recursive part) return false
    if (
      (!areObjects && val1 !== val2) ||
      (areObjects && !compareDeep(val1, val2))
    )
      return false;
  }
  return true;
};

const person1 = {
  name: 'Jane Doe',
  work: {
    occupation: {
      area: 'dentist',
    },
  },
};

const person2 = {
  name: 'Jane Doe',
  work: {
    occupation: {
      area: 'orthodontist',
    },
  },
};

console.log(compareDeep(person1, person2));
