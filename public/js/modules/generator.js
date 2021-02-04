// Create DOM elements from the alplhabet.
// One for each letter.

export function generateLettersButtons(alphabet) {
  for (let letter of alphabet) {
    var letterContainer = document.querySelector(".letter__container");
    var letterDiv = document.createElement("div");
    letterDiv.innerHTML = letter;
    letterDiv.classList.add("letter");
    letterContainer.append(letterDiv);
  }
}

// Generate DOM elements form the hidden word.

export function generateHiddenWordLetters(word) {
  for (let i = 0; i < word.length; i++) {
    var letterContainer = document.querySelector(".hidden-word");
    var letterDiv = document.createElement("div");
    letterDiv.classList.add("hidden-word__letter");
    letterContainer.append(letterDiv);
  }
}
