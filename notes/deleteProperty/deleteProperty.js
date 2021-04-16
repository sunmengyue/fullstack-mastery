function deleteProperty(myObj, prop) {
  let newObj = {};
  for (let key in myObj) {
    if (key !== prop) {
      newObj[key] = myObj[key];
    }
  }
  return newObj;
}

console.log(deleteProperty({ a: 1, b: 2 }, 'b'));
