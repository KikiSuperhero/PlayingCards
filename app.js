
const startButton = document.querySelector("#start-button");

var sDeckData = "";

const getDeckData = async () => {
  //debugger;
  try {
    let oNewDeckPromise = await axios.get(
      "https://deckofcardsapi.com/api/deck/new/"
    );
    let oNewDeckPromiseResponse = oNewDeckPromise.data;
    console.log(
      "We made a new deck with following data: ",
      oNewDeckPromiseResponse
    );
    sDeckData = oNewDeckPromiseResponse.deck_id;
  } catch (e) {
    console.log("Could not card data!");
    console.log("Error: " + e);
  }
};

const shuffleDeck = async (sDeckDataId) => {
  try {
    let oShuffledDeck = await axios.get(
      `https://deckofcardsapi.com/api/deck/${sDeckDataId}/shuffle/`
    );
    let oShuffledDeckResponse = oShuffledDeck.data;
    console.log(
      'Our shuffled Deck with the Data: ',
      oShuffledDeckResponse
    );
  } catch (e) {
    console.log("Could not shuffle data!");
    console.log("Error: " + e);
  }
};





startButton.addEventListener("click", getDeckId);

