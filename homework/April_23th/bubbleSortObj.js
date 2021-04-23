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

const bubbleSortObj = (arr, key) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j][key] > arr[j + 1][key]) {
        // swith the position of arr[j] and arr[j + 1]
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  console.log(arr);
  return arr;
};

bubbleSortObj(books, 'libraryID');
console.log('--------------------------------');
bubbleSortObj(books, 'title');
console.log('--------------------------------');
bubbleSortObj(books, 'author');
