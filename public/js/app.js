import { alphabet, words } from "./modules/constants.js";
import {
  generateLettersButtons,
  generateHiddenWordLetters,
} from "./modules/generator.js";
import { convertToHiddenWord } from "./modules/hiddenWord.js";
import { checkLetterInWord } from "./modules/game.js";

const word = words[Math.floor(Math.random() * words.length)];
const wordToGuess = Array.from(word);
let hiddenWord = convertToHiddenWord(wordToGuess);

generateLettersButtons(alphabet);
generateHiddenWordLetters(hiddenWord);

const letters = document.querySelectorAll(".letter");
letters.forEach((letter) => {
  letter.addEventListener("click", () => {
    if (letter.classList.value === "letter") {
      let letterContent = letter.innerHTML;
      checkLetterInWord(letterContent, wordToGuess, hiddenWord);
      letter.classList.replace("letter", "letter--clicked");
    }
  });
});
