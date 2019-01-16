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

function renderGuideItemActive(target) {
  renderAllGuideItemNegative();
  target.classList.add("active");
}

function renderMainGuideItemActive() {
  renderAllGuideItemNegative();
  let mainGuideItem = document.getElementById("guide_item_main");
  mainGuideItem.classList.add("active");
}

function renderAllGuideItemNegative() {
  let guideItems = Array.from(document.querySelectorAll(".guide_item"));
  guideItems.forEach(guideItem => {
    guideItem.classList.remove("active");
  });
}

function renderMovieDetails(movieDetails, imageURL) {
  let movieDetailsNode = document.getElementById("details");
  let movieDetailsTemplate = document.getElementById("movie_details");

  let originalTitle = movieDetailsTemplate.content.getElementById(
    "original_title"
  );
  let title = movieDetailsTemplate.content.getElementById("translated_title");
  let year = movieDetailsTemplate.content.getElementById("year");
  let moviePoster = movieDetailsTemplate.content.getElementById("movie_poster");

  let directors = movieDetailsTemplate.content.getElementById("directors");
  let casts = movieDetailsTemplate.content.getElementById("casts");
  let genres = movieDetailsTemplate.content.getElementById("genres");
  let countries = movieDetailsTemplate.content.getElementById("countries");
  let releaseTime = movieDetailsTemplate.content.getElementById("release_time");
  let aka = movieDetailsTemplate.content.getElementById("aka");

  title.textContent = movieDetails.title;
  originalTitle.textContent = movieDetails.original_title;
  year.textContent = movieDetails.year;
  moviePoster.src = imageURL;

  let directorNames = [];
  movieDetails.directors.forEach(e => directorNames.push(e.name));
  directors.textContent = directorNames.join(" / ");

  let castNames = [];
  movieDetails.casts.forEach(e => castNames.push(e.name));
  casts.textContent = castNames.join(" / ");

  genres.textContent = movieDetails.genres.join(" / ");
  countries.textContent = movieDetails.countries.join(" / ");
  releaseTime.textContent = movieDetails.year;
  aka.textContent = movieDetails.aka.join(" / ");

  let movieDetailClone = document.importNode(
    movieDetailsTemplate.content,
    true
  );
  movieDetailsNode.append(movieDetailClone);
}
