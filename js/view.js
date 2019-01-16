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
