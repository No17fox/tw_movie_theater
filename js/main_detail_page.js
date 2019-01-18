if (localStorage.moviesStorage) {
  showMovieDetailPage();
} else {
  loadMoviesToStorage("../resources/movies.csv", showMovieDetailPage);
}

function showMovieDetailPage() {
  let urlParams = window.location.search;
  let movieID = urlParams.match(/id=[0-9]+/g)[0].slice(3) || "1291545";
  getMovieDetailInfo(movieID, renderMovieDetails);
  getMovieDiscuss(movieID, "comments", renderAllComments, 4);
  getMovieDiscuss(movieID, "reviews", renderAllReviews, 4);
  showRecommends();
}

function showRecommends() {
  let movies = getRandomMovies(4);
  renderRecommends(movies);
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

function saveSearchKey(event) {
  let searchInput = document.getElementById("search_input");
  let searchKey = searchInput.value;

  if (
    searchKey &&
    (event.type === "click" ||
      (event.type === "keypress" && event.keyCode === 13))
  ) {
    localStorage.searchContent = searchKey;
    window.location.href = "./homepage.html";
    searchInput.value = "";
  }
}
