if (localStorage.moviesStorage) {
  main();
} else {
  loadMoviesToStorage("../resources/movies.csv", main);
}

function main() {
  if (localStorage.searchContent) {
    showMoviesBySearch(event);
  } else {
    showMoviesByRange(0, 23);
  }
  renderMainGuideItemActive();
}

function showMoviesByRange(firstNum, secondNum) {
  let movies = getMoviesByRange(firstNum, secondNum);
  renderNewMovieCards(movies);
}

function showTopMovies(event) {
  showMoviesByRange(100, 147);
  renderGuideItemActive(event.target);
}

function showRandomMovies(event, count = 12) {
  let movies = getRandomMovies(count);
  renderNewMovieCards(movies);
  renderGuideItemActive(event.target);
}

function showMoviesByGenre(event) {
  let parentNode = event.target.parentNode;
  let genre = parentNode.querySelector(".guide_title").innerText;
  let movies = getMoviesInfoByGenre(genre);
  renderNewMovieCards(movies);
  renderGuideItemActive(event.target);
}

function showMoviesBySearch(event) {
  let searchInput = document.getElementById("search_input");

  if (localStorage.searchContent) {
    let searchKey = localStorage.searchContent;
    let result = searchMovies(searchKey);
    result
      ? renderNewMovieCards(result)
      : renderErrorMessage("对不起，无法找到你想要的电影，请重新搜索...");
    localStorage.searchContent = "";
  } else if (
    searchInput.value &&
    (event.type === "click" ||
      (event.type === "keypress" && event.keyCode === 13))
  ) {
    searchKey = searchInput.value;
    let result = searchMovies(searchKey);
    result
      ? renderNewMovieCards(result)
      : renderErrorMessage("对不起，无法找到你想要的电影，请重新搜索...");
    searchInput.value = "";
  }
}

function storageSelectedMovieId(event) {
  let parentNode = event.target.parentNode;
  while (!Array.from(parentNode.classList).includes("movie")) {
    parentNode = parentNode.parentNode;
  }
  localStorage.selectedMovie = parentNode.getAttribute("movie_id");
}
