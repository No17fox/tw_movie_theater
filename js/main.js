if (localStorage.moviesStorage) {
  main();
} else {
  loadMoviesToStorage("../resources/movies.csv", main);
}

function main() {
  if (window.location.search.includes("search")) {
    showMoviesBySearch(event);
  } else {
    backToMainGuide();
  }
}

function backToMainGuide() {
  showMoviesByRange(0, 23);
  $("#load_more").removeClass("hide");
  renderMainGuideItemActive();
}

function showMoviesByRange(firstNum, secondNum) {
  let movies = getMoviesByRange(firstNum, secondNum);
  renderMovieCards(movies);
}

function showTopMovies(event) {
  showMoviesByRange(100, 147);
  renderGuideItemActive(event.target);
  $("#load_more").addClass("hide");
}

function showRandomMovies(event, count = 12) {
  let movies = getRandomMovies(count);
  renderMovieCards(movies);
  renderGuideItemActive(event.target);
  $("#load_more").addClass("hide");
}

function showMoviesByGenre(event) {
  let parentNode = event.target.parentNode;
  let genre = parentNode.querySelector(".guide_title").innerText;
  let movies = getMoviesInfoByGenre(genre);
  renderMovieCards(movies);
  renderGuideItemActive(event.target);
  $("#load_more").addClass("hide");
}

function showMoviesBySearch(event) {
  let searchInput = document.getElementById("search_input");
  let urlParams = window.location.search;
  let searchKey = searchInput.value;

  if (searchKey && (event.type === "click" || event.type === "change")) {
    let result = searchMovies(searchKey);
    result
      ? renderMovieCards(result)
      : renderErrorMessage("对不起，无法找到你想要的电影，请重新搜索...");
  } else if (urlParams.includes("search")) {
    let searchKey = decodeURI(urlParams.match(/search=.*/g)[0].slice(7));
    let result = searchMovies(searchKey);
    result
      ? renderMovieCards(result)
      : renderErrorMessage("对不起，无法找到你想要的电影，请重新搜索...");
  }

  $("#load_more").addClass("hide");
}

function showMoreMovies(element) {
  let posterWall = document.getElementById("poster_wall");
  let movieCardsNum = posterWall.querySelectorAll(".movie").length;

  let movies = getMoviesByRange(movieCardsNum, movieCardsNum + 47);
  if (movies.length) {
    renderMovieCards(movies, false);
  } else {
    $(element).text("所有电影都已经加载啦");
  }
}
