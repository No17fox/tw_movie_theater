if (localStorage.moviesStorage) {
  main();
} else {
  load.loadMoviesToStorage("../resources/movies.csv", main);
}

function main() {
  getMovieDetailInfo("1291545", renderMovieDetails);
}
