"use strict";

const getDrinkBtn = document.querySelector(".btn");
const inputField = document.querySelector(".input");
const mainCon = document.querySelector(".main");

// get data from api
function getData(drinkName) {
  fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log(data.drinks.forEach((drink) => renderDrink(drink)));
    });
}

function renderDrink(data) {
  const html = `
    <section class="card">
        <div class="drink-img">
            <img src="${data.strDrinkThumb}" alt="">
        </div>
        <div class="drink-info">
            <h2 class="drink-name">${data.strDrink}</h2>
            <p>${data.strInstructions}</p>
        </div>
    </section>
    `;
  mainCon.insertAdjacentHTML("beforeend", html);
}

getDrinkBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (inputField.value == "") alert("enter drink name");
  else {
    getData(inputField.value);
    const children = mainCon.children;
    Array.from(children).forEach((child) => {
      if (child.classList.contains("arrow")) return;
      else {
        child.remove();
      }
    });
  }
  inputField.value = "";
});
