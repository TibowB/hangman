let count = 1;

// Check if letter in word

export function checkLetterInWord(letter, word, hiddenWord) {
  var letterMatch = word.includes(letter);
  if (letterMatch) {
    var indices = getAllIndices(letter, word);
    changeDOMHiddenWord(letter, indices);
    changeHiddenWord(letter, indices, hiddenWord);
    if (arrayEquals(word, hiddenWord)) {
      playerWins(word);
    }
    return hiddenWord;
  }
  changeHangmanImage(count);
  count++;
  if (count === 12) {
    playerLoses(word);
  }
  return count;
}

// Get all indices of submitted letter.

function getAllIndices(letter, word) {
  var indices = [];
  var index = word.indexOf(letter);
  while (index != -1) {
    indices.push(index);
    index = word.indexOf(letter, index + 1);
  }
  return indices;
}

// Change the DOM elements of the hidden word.

function changeDOMHiddenWord(letter, indices) {
  for (let i of indices) {
    var nodeChildren = document.querySelectorAll(".hidden-word__letter");
    nodeChildren.forEach((child) => {
      var parentNode = child.parentElement;
      var childIndex = Array.prototype.indexOf.call(parentNode.children, child);
      if (i === childIndex) {
        child.innerHTML = letter;
        child.classList.replace(
          "hidden-word__letter",
          "hidden-word__letter--found"
        );
      }
    });
  }
}

// Change hidden word variable.

function changeHiddenWord(letter, indices, hiddenWord) {
  for (let i of indices) {
    hiddenWord[i] = letter;
  }
  return hiddenWord;
}

// Change hangman image

function changeHangmanImage(number) {
  var hangmanContainer = document.querySelector(".hangman__image");
  hangmanContainer.setAttribute("src", `./public/img/GUESS_${number}.svg`);
}

// Check if word and hidden word are similar.

function arrayEquals(word, hiddenWord) {
  return word.every((value, index) => value === hiddenWord[index]);
}

// If user wins.

function playerWins(word) {
  word = word.join("");
  document.location.href = `/game-over.html?status=winner&word=${word}`;
}

// If user loses.

function playerLoses(word) {
  word = word.join("");
  document.location.href = `/game-over.html?status=loser&word=${word}`;
}
