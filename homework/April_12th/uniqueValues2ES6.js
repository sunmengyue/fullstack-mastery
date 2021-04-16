let arr1 = [2, 4, 5, 6, 7];
let arr2 = [4, 6, 7, 5, 0, 8, 9];

var array3 = array1.filter(function (obj) {
  return array2.indexOf(obj) == -1;
});

console.log(array3);
