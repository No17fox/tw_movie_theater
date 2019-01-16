function renderMovieCard(movie) {
  let posterWall = document.getElementById("poster_wall");
  let movieTemplate = document.getElementById("movie_card");
  let poster = movieTemplate.content.getElementById("poster");
  let title = movieTemplate.content.getElementById("title");
  let rating = movieTemplate.content.getElementById("rating");

  poster.src = movie.image;
  title.textContent = movie.title;
  rating.textContent = movie.rating;

  let movieClone = document.importNode(movieTemplate.content, true);
  posterWall.append(movieClone);
}

function renderNewMovieCards(movies) {
  removeAllMovieCards();

  if (Array.isArray(movies)) {
    movies.forEach(movie => {
      renderMovieCard(movie);
    });
  } else {
    renderMovieCard(movies);
  }
}

function removeAllMovieCards() {
  let posterWall = document.getElementById("poster_wall");
  let movieCards = posterWall.querySelectorAll(".movie");
  movieCards.forEach(movieCard => {
    posterWall.removeChild(movieCard);
  });
}

function renderSearchErrorMessage() {
  removeAllMovieCards();

  let content = document.getElementById("content");

  let errorMessageTemplate = document.getElementById("error_message");

  let errorMessage = document.importNode(errorMessageTemplate.content, true);
  content.append(errorMessage);
}
