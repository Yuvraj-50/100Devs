const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

document.querySelector("ul").textContent = localStorage.getItem("li");

btn.addEventListener("click", function () {
  const value = input.value;
  fetch(`https://openlibrary.org/isbn/${value}.json`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      const li = document.createElement("li");
      li.textContent = data.title;

      localStorage.setItem("booksName", li);

      document.querySelector("h1").appendChild = data.title;
    });
});
