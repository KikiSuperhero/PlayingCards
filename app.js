const startButton = document.querySelector("#start-button");
var Constants;
fetch("./Constants.json")
  .then((response) => {
    return response.json();
  })
  .then(function (data) {
    Constants = data;
    console.log(Constants);
  });

var sDeckId = "";

const getDeckId = async () => {
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
    sDeckId = oNewDeckPromiseResponse.deck_id;
  } catch (e) {
    console.log("Could not card data!");
    console.log("Error: " + e);
  }
};

startButton.addEventListener("click", getDeckId);
