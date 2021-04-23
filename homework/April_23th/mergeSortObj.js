var books = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryID: 1254,
  },
  {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryID: 4264,
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245,
  },
  {
    title: '10X',
    author: 'Grant Cardone',
    libraryID: 3945,
  },
];

function merge(arr1, arr2, key) {
  // Because the "key of undefined" error is really tricky
  //to deal with, here I am not using Daniel's way, where the
  //first element in each array is shifted each time
  let newArr = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i][key] < arr2[j][key]) {
      newArr.push(arr1[i]);
      i++;
    } else {
      newArr.push(arr2[j]);
      j++;
    }
  }
  // for whichever array that has lefted elements not compared and pushed
  while (i < arr1.length) {
    newArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    newArr.push(arr2[j]);
    j++;
  }
  return newArr;
}

function mergeSort(arr, key) {
  // base case
  if (arr.length === 1) return arr;

  // recursion rule
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid), key);
  let right = mergeSort(arr.slice(mid), key);
  return merge(left, right, key);
}

console.log(mergeSort(books, 'libraryID'));
console.log('--------------------------------');
console.log(mergeSort(books, 'title'));
console.log('--------------------------------');
console.log(mergeSort(books, 'author'));
