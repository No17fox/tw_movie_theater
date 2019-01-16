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
  cleanContent();
  if (Array.isArray(movies)) {
    movies.forEach(movie => {
      renderMovieCard(movie);
    });
  } else {
    renderMovieCard(movies);
  }
}

function cleanContent() {
  removeAllMovieCards();
  removeErrorMessage();
}

function removeAllMovieCards() {
  let posterWall = document.getElementById("poster_wall");
  let movieCards = posterWall.querySelectorAll(".movie");
  movieCards.forEach(movieCard => {
    posterWall.removeChild(movieCard);
  });
}

function removeErrorMessage() {
  let errorMessage = document.getElementById("error_message");
  if (errorMessage) {
    let parentNode = errorMessage.parentElement;
    parentNode.removeChild(errorMessage);
  }
}

function renderErrorMessage(message) {
  cleanContent();
  let content = document.getElementById("content");
  let messageTemplate = document.getElementById("message");

  let errorMessage = messageTemplate.content.getElementById("error_message");
  errorMessage.textContent = message;

  let errorMessageClone = document.importNode(messageTemplate.content, true);
  content.append(errorMessageClone);
}
