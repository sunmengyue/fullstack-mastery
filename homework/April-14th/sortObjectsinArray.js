function sortObj(libraryArr, propbasedOn) {
  for (let i = 0; i < libraryArr.length; i++) {
    for (let j = i + 1; j < libraryArr.length; j++) {
      if (libraryArr[i][propbasedOn] > libraryArr[j][propbasedOn]) {
        let temp = libraryArr[i];
        libraryArr[i] = libraryArr[j];
        libraryArr[j] = temp;
      }
    }
  }
  return libraryArr;
}

let library = [
  { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 },
  { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245,
  },
];

console.log(sortObj(library, 'author'));
// console.log(sortObj(library, 'title'));
// console.log(sortObj(library, 'libraryID'));
