if (localStorage.moviesStorage) {
  main();
} else {
  load.loadMoviesToStorage("../resources/movies.csv", main);
}

function main() {
  getMovieDetailInfo("1291843", renderMovieDetails);
  getMovieDiscuss("1291843", "comments", renderAllComments, 4);
  getMovieDiscuss("1291843", "reviews", renderAllReviews, 4);
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
