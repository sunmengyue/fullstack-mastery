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

// 1. Log the 2nd movie from jessy's list
let secondMovie = listOfMovies.favourites[1];
console.log(secondMovie);

// 2. Make another object with Daniel’s list of movies and add the Aquaman movie from Jessy’s list to his.
let danielsList = [];
danielsList.push(listOfMovies.favourites[2]);
console.log(danielsList);

// 3. What genres are not in Jessy’s favourites?
let genresNotFavored = [];
for (let i = 0; i < listOfMovies.genres.length; i++) {
  // find out the genre that is in the favourite list
  let favorateGenre = listOfMovies.favourites.find(
    (movie) => movie.genre === listOfMovies.genres[i],
  );
  // if the current genre is in the favorate list, skip this genre
  if (favorateGenre) {
    continue;
  }

  genresNotFavored.push(listOfMovies.genres[i]);
}

console.log(genresNotFavored);
