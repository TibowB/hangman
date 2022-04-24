import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  isLetterInWord(letter: string): boolean {
    if (this.game.value.word.includes(letter)) {
      const letterIndex = this.game.value.word.indexOf(letter);
      this.game.value.hiddenWord[letterIndex] = letter;
      return true;
    }
    this.game.next({
      word: this.game.value.word,
      hiddenWord: this.game.value.hiddenWord,
      tries: this.game.value.tries + 1,
      isWordFound: false,
    });
    return false;
  }

  hiddenWordIsFound(): boolean {
    return (
      this.game.value.word.join('') === this.game.value.hiddenWord.join('')
    );
  }
}
