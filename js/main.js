require.config({
  paths: {
    load: "load"
  }
});

define(["load"], function(load) {
  "use strict";

  if (localStorage.moviesStorage) {
    main();
  } else {
    load.loadMoviesToStorage("../resources/movies.csv", main);
  }

  function main() {}
});
