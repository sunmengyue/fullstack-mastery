let array = [33, 21, 14, 3, 21, 21, 334, 579, 34, 565, 4345, 3987, 3];

let uniqueArr = array.filter((el, index) => {
  return array.indexOf(el) === index;
});

console.log(uniqueArr);
