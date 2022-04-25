import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WordService } from '../word/word.service';
import { Game } from '../../types/Game';
import { Hangman } from '../../interfaces/hangman.interface';

@Injectable({
  providedIn: 'root',
})
export class HangmanService implements Hangman {
  public game: BehaviorSubject<Game> = new BehaviorSubject<Game>({
    word: [],
    hiddenWord: [],
    tries: 0,
    isWordFound: false,
  });

  constructor(private wordService: WordService) {}

  prepareGame(): void {
    const newWord = this.wordService.getRandomWord();
    this.game.next({
      word: newWord,
      hiddenWord: this.wordService.getHiddenWord(newWord),
      tries: 0,
      isWordFound: false,
    });
  }

  getTries(): number {
    return this.game.value.tries;
  }

  handleLetterSubmission(letter: string): void {
    this.updateHiddenWord(letter);
    this.updateGameTries(this.isLetterInWord(letter));
  }

  isLetterInWord(letter: string): boolean {
    return this.game.value.word.includes(letter);
  }

  updateHiddenWord(letter: string): void {
    const indexes: number[] = [];
    let index = this.game.value.word.indexOf(letter);
    while (index != -1) {
      indexes.push(index);
      index = this.game.value.word.indexOf(letter, index + 1);
    }
    indexes.forEach((index) => {
      this.game.value.hiddenWord[index] = letter;
    });
  }

  updateGameTries(increment: boolean): void {
    this.game.next({
      word: this.game.value.word,
      hiddenWord: this.game.value.hiddenWord,
      tries: increment ? this.game.value.tries : this.game.value.tries + 1,
      isWordFound: this.hiddenWordIsFound(),
    });
  }

  hiddenWordIsFound(): boolean {
    return (
      this.game.value.word.join('') === this.game.value.hiddenWord.join('')
    );
  }

  isGameOver(): boolean {
    return this.getTries() === 11;
  }
}
