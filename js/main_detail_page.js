if (localStorage.moviesStorage) {
  main();
} else {
  load.loadMoviesToStorage("../resources/movies.csv", main);
}

function main() {
  console.log("aaa");
  getMovieDetailInfo("1291545", renderMovieDetails);
}
