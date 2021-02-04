// Convert a given array to an array only containing underscores.
// The spaces are saved.

export function convertToHiddenWord(word) {
  var hiddenWord = new Array();
  var wordList = Array.from(word);
  for (let letter of wordList) {
    if (letter !== " ") {
      letter = "_";
      hiddenWord.push(letter);
    } else {
      hiddenWord.push(letter);
    }
  }
  return hiddenWord;
}
