const listOfMovies = {
  account: 'Jessy',
  genres: [
    'Thriller',
    'Drama',
    'Anime',
    'Comedy',
    'Romance',
    'Horror',
    'Documentaries',
  ],
  favourites: [
    { title: 'Little Miss Sunshine', genre: 'Comedy', year: 2006 },
    { title: "Howl's Moving Castle", genre: 'Japanese animation', year: 2004 },
    { title: 'Aquaman', genre: 'Action', year: 2019 },
    { title: 'The Shape of Water', genre: 'Drama', year: 2017 },
    { title: 'Your name', genre: 'Japanese animation', year: 2017 },
    { title: 'Inception', genre: 'Action', year: 2010 },
  ],
};

let notJessy = [];
for (let i = 0; i < listOfMovies.genres.length; i++) {
  for (let j = 0; j < listOfMovies.favourites.length; j++) {
    if (listOfMovies.favourites[j].genre === listOfMovies.genres[i]) {
      break;
    }
  }
  notJessy.push(listOfMovies.genres[i]);
}
console.log(notJessy);
