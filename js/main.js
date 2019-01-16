if (localStorage.moviesStorage) {
  main();
} else {
  load.loadMoviesToStorage("../resources/movies.csv", main);
}

function main() {}

function showMoviesByGenre(event) {
  let parentNode = event.target.parentNode;
  let genre = parentNode.querySelector(".guide_title").innerText;
  let movies = getMoviesInfoByGenre(genre);
  renderNewMovieCards(movies);
}
