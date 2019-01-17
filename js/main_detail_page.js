if (localStorage.moviesStorage) {
  showMovieDetailPage();
} else {
  load.loadMoviesToStorage("../resources/movies.csv", showMovieDetailPage);
}

function showMovieDetailPage() {
  let movieID = localStorage.selectedMovie || "1291545";
  getMovieDetailInfo(movieID, renderMovieDetails);
  getMovieDiscuss(movieID, "comments", renderAllComments, 4);
  getMovieDiscuss(movieID, "reviews", renderAllReviews, 4);
  showRecommends();
}

function showRecommends() {
  let movies = getRandomMovies(4);
  renderRecommends(movies);
}

function storageSelectedMovieId(event) {
  let parentNode = event.target.parentNode;
  while (!Array.from(parentNode.classList).includes("movie")) {
    parentNode = parentNode.parentNode;
  }
  localStorage.selectedMovie = parentNode.getAttribute("movie_id");
}
