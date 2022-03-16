import { ALPHABET, WORDS } from "./modules/constants.js";
import {
  generateLettersButtons,
  generateHiddenWordLetters,
} from "./modules/generator.js";
import { convertToHiddenWord } from "./modules/hiddenWord.js";
import { checkLetterInWord } from "./modules/game.js";
const randomWord = WORDS[Math.floor(Math.random() * WORDS.length)];
const wordToGuess = Array.from(randomWord);
let hiddenWord = convertToHiddenWord(wordToGuess);
generateLettersButtons(ALPHABET);
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
