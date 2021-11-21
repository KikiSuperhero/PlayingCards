const startButton = document.querySelector("#start-button");

var sDeckId = "";

const getDeckId = async () => {
  try {
    let cardDeck = axios.get("https://deckofcardsapi.com/api/deck/new/");
    console.log(cardDeck);
  } catch (e) {}
  console.log("Could not card data!");
  console.log("Error: " + e);
};

startButton.addEventListener("click", getDeckId);
