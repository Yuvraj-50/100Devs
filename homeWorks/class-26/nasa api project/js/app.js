"use strict";
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");

function getAndDisplayData() {
  fetch(
    `https://api.nasa.gov/planetary/apod?api_key=z1d8CZkreFhem3FV9wxh0awyb0LbCz0i3XXddMEm&date=${input.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      renderImg(data);
      console.log(data);
    });
}

function renderImg(data) {
  if (data.media_type == "image") {
    document.querySelector(".nasa-img").src = data.url;
    document.querySelector(".explanation").textContent = data.explanation;
    document.querySelector(".video").style.display = "none";
    document.querySelector(".img").style.display = "block";
  } else if (data.media_type == "video") {
    document.querySelector(".video").style.display = "block";
    document.querySelector(".img").style.display = "none";
    document.querySelector(".nasa-video").src = data.url;
  }
}

btn.addEventListener("click", function () {
  console.log(input.value);
  getAndDisplayData();
});
