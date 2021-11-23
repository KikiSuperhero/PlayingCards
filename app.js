
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
    console.log("Could not get card data!");
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
      'Our shuffled deck with the data: ',
      oShuffledDeckResponse
    );
  } catch (e) {
    console.log("Could not shuffle data!");
    console.log("Error: " + e);
  }
};

const drawACard = async (sDeckDataId) => {
  try {
    let oNewCard = await axios.get(
      `https://deckofcardsapi.com/api/deck/${sDeckDataId}draw/?count=1`
    );
    let oNewCardResponse = oNewCard.data;
    console.log(
      'Our new card with the data: ',
      oNewCardResponse
    );
  } catch (e) {
    console.log("Could not draw a card!");
    console.log("Error: " + e);
  }
};



startButton.addEventListener("click", getDeckData);
shuffleButton.addEventListener("click", function (){
  shuffleDeck(oDeckData.deck_id);
});

