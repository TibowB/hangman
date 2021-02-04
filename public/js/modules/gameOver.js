const urlParams = new URL(window.location);
const status = urlParams.searchParams.get("status");
const word = urlParams.searchParams.get("word").toUpperCase();

// Generate message to the user.
// Switch to display the message in regards of
// the status value in the URL.

function generateMessage(status, word) {
  var message = document.querySelector(".message");
  switch (status) {
    case "winner":
      message.innerHTML = `Congratulations, you found the word ${word}.`;
      break;
    case "loser":
      message.innerHTML = `Oh no ! You lost ! The word was ${word}`;
  }
}

generateMessage(status, word);
