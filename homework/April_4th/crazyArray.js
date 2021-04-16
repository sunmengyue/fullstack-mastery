let crazyArray = [
  'Elon Musk',
  'Bootcamp',
  3,
  5,
  { a: 2, b: 8 },
  '#',
  { language: 'Japanese', greeting: '#' },
  767,
  34,
  '#',
  ['Tomato', '#', 'PineApple'],
  { sports: '#' },
];

for (let i = 0; i < crazyArray.length; i++) {
  if (crazyArray[i].constructor === Object) {
    for (let key in crazyArray[i]) {
      if (crazyArray[i][key] === '#') {
        crazyArray[i][key] = 'YEAH';
      }
    }
  } else if (crazyArray[i].constructor === Array) {
    for (let j = 0; j < crazyArray[i].length; j++) {
      if (crazyArray[i][j] === '#') crazyArray[i][j] = 'BOOM';
    }
  } else {
    if (crazyArray[i] === '#') crazyArray[i] = 'HASH';
  }
}

console.log(crazyArray);
