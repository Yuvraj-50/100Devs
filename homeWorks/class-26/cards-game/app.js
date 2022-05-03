const btn = document.querySelector(".btn");

let deckId = "";

// creates a new deck and getting a deckId
fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
  .then((res) => res.json())
  .then((data) => {
    deckId = data.deck_id;
  });

// drawing a card
btn.addEventListener("click", function () {
  fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=4`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
});
