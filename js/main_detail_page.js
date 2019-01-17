if (localStorage.moviesStorage) {
  main();
} else {
  load.loadMoviesToStorage("../resources/movies.csv", main);
}

function main() {
  getMovieDetailInfo("1291545", renderMovieDetails);
  getMovieDiscuss("1291545", "comments", renderAllComments, 4);
  getMovieDiscuss("1291545", "reviews", renderAllReviews, 4);
}
