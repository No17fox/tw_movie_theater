if (localStorage.moviesStorage) {
  main();
} else {
  load.loadMoviesToStorage("../resources/movies.csv", main);
}

function main() {
  showMoviesByRange(0, 23);
}

function showMoviesByRange(firstNum, secondNum) {
  let movies = getMoviesByRange(firstNum, secondNum);
  renderNewMovieCards(movies);
}

function showTopMovies() {
  showMoviesByRange(100, 147);
}

function showRandomMovies(count = 12) {
  let movieArr = [];
  for (let i = 0; i < count; i++) {
    let sequence = getRandomNumByRange(0, 249);
    let movie = getMovieBySequence(sequence);
    movieArr.push(movie);
  }
  renderNewMovieCards(movieArr);
}

function getRandomNumByRange(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function showMoviesByGenre(event) {
  let parentNode = event.target.parentNode;
  let genre = parentNode.querySelector(".guide_title").innerText;
  let movies = getMoviesInfoByGenre(genre);
  renderNewMovieCards(movies);
}

function showMoviesBySearch() {
  let searchInput = document.getElementById("search_input");
  let searchKey = searchInput.value;
  let result = searchMovies(searchKey);
  result
    ? renderNewMovieCards(result)
    : renderErrorMessage("对不起，无法找到你想要的电影，请重新搜索...");
  searchInput.value = "";
}
