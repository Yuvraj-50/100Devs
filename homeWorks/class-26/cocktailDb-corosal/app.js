const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const drinkName = document.querySelector(".drink-name");
const drinkInstruction = document.querySelector(".drink-instruction");
const drinkImg = document.querySelector(".drink-img");

btn.addEventListener("click", getAndDisplay);

function getAndDisplay(e) {
  // prevenst page from auto reload
  e.preventDefault();

  if (input.value == "") {
    alert("Please enter a drink name");
  } else {
    fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + input.value
    )
      .then((res) => res.json())
      .then((datas) => {
        datas.drinks.forEach((drink, idx) => {
          setTimeout(function () {
            drinkImg.src = drink.strDrinkThumb;
            drinkName.textContent = drink.strDrink;
            drinkInstruction.textContent = drink.strInstructions;
          }, idx * 2000);
        });
      });
  }
}
