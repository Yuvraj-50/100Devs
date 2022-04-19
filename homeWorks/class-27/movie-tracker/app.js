"use strict";

const btn = document.querySelector("#btn");
let mainCon = document.querySelector(".main");

showMovie();

btn.addEventListener("click", function () {
  let watchedMoviesObj;
  const input = document.querySelector(".input");
  fetch(`https://imdb-api.com/en/API/SearchMovie/k_22kcbwzq/${input.value}`)
    .then((res) => res.json())
    .then((data) => {
      input.value = "";
      let watchedMovies = localStorage.getItem("watchedMovies");
      if (watchedMovies == null) {
        watchedMoviesObj = [];
      } else {
        watchedMoviesObj = JSON.parse(watchedMovies);
      }
      watchedMoviesObj.push(data);
      localStorage.setItem("watchedMovies", JSON.stringify(watchedMoviesObj));
      showMovie();
    })
    .catch((err) => {
      console.log("something went wrong" + err.message);
    });
});

function showMovie() {
  let watchedMoviesObj;
  let watchedMovies = localStorage.getItem("watchedMovies");
  if (watchedMovies == null) {
    watchedMoviesObj = [];
  } else {
    watchedMoviesObj = JSON.parse(watchedMovies);
  }
  let html = "";

  watchedMoviesObj.forEach((movie, index) => {
    html += `
      <div class="card">
          <div class="img">
            <img src="${movie.results[0].image}" class="movie-poster" alt="">
          </div>

          <div class = "movie-info">
            <p class="name">${index + 1}:- ${movie.results[0].title}</p>
            <button id = "${index}" class ="delete btn">Delete</button>
          </div>
      </div> 
  `;
  });

  if (watchedMovies != 0) {
    mainCon.innerHTML = html;
  }
}

mainCon.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    let watchedMoviesObj;
    let watchedMovies = localStorage.getItem("watchedMovies");
    if (watchedMovies == null) {
      watchedMoviesObj = [];
    } else {
      watchedMoviesObj = JSON.parse(watchedMovies);
    }

    watchedMoviesObj.splice(e.target.id, 1);
    localStorage.setItem("watchedMovies", JSON.stringify(watchedMoviesObj));
    showMovie();
  }
});
