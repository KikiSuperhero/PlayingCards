
const startButton = document.querySelector("#start-button");
const shuffleButton = document.querySelector("#shuffle-button");
var Constants;
fetch("./Constants.json")
  .then((response) => {
    return response.json();
  })
  .then(function (data) {
    Constants = data;
    console.log(Constants);
  });

var oDeckData = "";

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
    oDeckData = oNewDeckPromiseResponse;
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





startButton.addEventListener("click", getDeckData);
shuffleButton.addEventListener("click", function (){
  shuffleDeck(oDeckData.deck_id);
});

