if (localStorage.moviesStorage) {
  main();
} else {
  load.loadMoviesToStorage("../resources/movies.csv", main);
}

function main() { }

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
  result ? renderNewMovieCards(result) : renderErrorMessage('对不起，无法找到你想要的电影，请重新搜索...');
  searchInput.value = '';
}
