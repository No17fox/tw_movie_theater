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

function renderMovieDetails(movieDetails) {
  let movieDetailsNode = document.getElementById("details");
  let movieDetailsTemplate = document.getElementById("movie_details");

  let originalTitle = movieDetailsTemplate.content.getElementById(
    "original_title"
  );
  let title = movieDetailsTemplate.content.getElementById("translated_title");
  let year = movieDetailsTemplate.content.getElementById("year");
  let moviePoster = movieDetailsTemplate.content.getElementById("movie_poster");

  let directors = movieDetailsTemplate.content.getElementById("directors");
  let writers = movieDetailsTemplate.content.getElementById("writers");
  let casts = movieDetailsTemplate.content.getElementById("casts");
  let genres = movieDetailsTemplate.content.getElementById("genres");
  let countries = movieDetailsTemplate.content.getElementById("countries");
  let languages = movieDetailsTemplate.content.getElementById("languages");
  let releaseTime = movieDetailsTemplate.content.getElementById("release_time");
  let durations = movieDetailsTemplate.content.getElementById("durations");
  let aka = movieDetailsTemplate.content.getElementById("aka");
  let rating = movieDetailsTemplate.content.getElementById("movie_rating");
  let summary = movieDetailsTemplate.content.getElementById("summary");
  let movieStar = movieDetailsTemplate.content.getElementById("movie_star");

  title.textContent = movieDetails.title;
  originalTitle.textContent = movieDetails.original_title;
  year.textContent = movieDetails.year;
  moviePoster.src = movieDetails.images.small;

  let directorNames = [];
  movieDetails.directors.forEach(e => directorNames.push(e.name));
  directors.textContent = directorNames.join(" / ");

  let writerNames = [];
  movieDetails.writers.forEach(e => writerNames.push(e.name));
  writers.textContent = writerNames.join(" / ");

  let castNames = [];
  movieDetails.casts.forEach(e => castNames.push(e.name));
  casts.textContent = castNames.join(" / ");

  genres.textContent = movieDetails.genres.join(" / ");
  countries.textContent = movieDetails.countries.join(" / ");
  languages.textContent = movieDetails.languages.join(" / ");
  releaseTime.textContent = movieDetails.year;
  durations.textContent = movieDetails.durations.join(" / ");
  aka.textContent = movieDetails.aka.join(" / ");
  rating.textContent = movieDetails.rating.average;
  summary.textContent = movieDetails.summary;

  movieStar.append(renderStars(movieDetails.rating.average / 2));

  let movieDetailClone = document.importNode(
    movieDetailsTemplate.content,
    true
  );
  movieDetailsNode.append(movieDetailClone);
}

function renderAllReviews(allReviews) {
  allReviews.reviews.forEach(e => renderMovieReview(e));
}

function renderMovieReview(movieReview) {
  let movieReviewNode = document.getElementById("top_reviews");
  let movieReviewTemplate = document.getElementById("review");

  let reviewUser = movieReviewTemplate.content.getElementById("review_user");
  let reviewTitle = movieReviewTemplate.content.getElementById("review_title");
  let review_content = movieReviewTemplate.content.getElementById(
    "review_content"
  );

  let userInfor = renderUserInfor(movieReview);
  reviewUser.innerHTML = "";
  reviewUser.append(userInfor);

  reviewTitle.textContent = movieReview.title;
  review_content.textContent = movieReview.summary;

  let movieReviewClone = document.importNode(movieReviewTemplate.content, true);
  movieReviewNode.append(movieReviewClone);
}

function renderUserInfor(data) {
  let userInforTemplate = document.getElementById("user_infor");

  let userName = userInforTemplate.content.getElementById("user_name");
  let userStar = userInforTemplate.content.getElementById("user_star");
  let time = userInforTemplate.content.getElementById("time");

  userName.textContent = data.author.name;
  userStar.innerHTML = "";
  userStar.append(renderStars(data.rating.value));
  time.textContent = data.created_at;

  let userInforClone = document.importNode(userInforTemplate.content, true);
  return userInforClone;
}

function renderStars(value) {
  let starTemplate = document.getElementById("star");
  let starImg = starTemplate.content.querySelector("img");
  let stars = document.createElement("div");
  stars.className = "star";

  for (let i = 0; i < Math.floor(value); i++) {
    starImg.src = "../images/star_fill.svg";
    let starClone = document.importNode(starImg);
    stars.append(starClone);
  }

  if (value - Math.floor(value) >= 0.2) {
    starImg.src = "../images/star_half.svg";
    let starClone = document.importNode(starImg);
    stars.append(starClone);
  }
  return stars;
}
