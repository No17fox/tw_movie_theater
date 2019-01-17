if (localStorage.moviesStorage) {
  showMovieDetailPage();
} else {
  load.loadMoviesToStorage("../resources/movies.csv", showMovieDetailPage);
}

<<<<<<< HEAD
function main() {
  getMovieDetailInfo("1291843", renderMovieDetails);
  getMovieDiscuss("1291843", "comments", renderAllComments, 4);
  getMovieDiscuss("1291843", "reviews", renderAllReviews, 4);
=======
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
>>>>>>> 88cc9cdb7ba2513650062a84fbb7bba70200e6c6
}

function expendReview(element) {
  if ($(element).text() === "(展开)") {
    $(element).text("(折叠)");
    $(element)
      .prevAll("#review_sammary")
      .addClass("hide");
    $(element)
      .prevAll("#review_content")
      .removeClass("hide");
  } else {
    $(element).text("(展开)");
    $(element)
      .prevAll("#review_sammary")
      .removeClass("hide");
    $(element)
      .prevAll("#review_content")
      .addClass("hide");
  }
}
