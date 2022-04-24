import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { AlphabetService } from '../alphabet/alphabet.service';
import { WordService } from '../word/word.service';

@Injectable({
  providedIn: 'root',
})
export class HangmanService {
  public word: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  public hiddenWord: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(
    []
  );
  public tries: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(
    private alphabetService: AlphabetService,
    private wordService: WordService
  ) {}

  prepareGame(): void {
    this.word.next(this.wordService.getRandomWord());
    this.hiddenWord.next(this.wordService.getHiddenWord(this.word.value));
  }

  getAlphabet(): string[] {
    return this.alphabetService.getAlphabet();
  }

  getWordAsString(): string {
    return this.wordService.getWordAsString(this.word.value);
  }

  getTries(): number {
    return this.tries.value;
  }

  removeWord(): void {
    this.word.next([]);
    this.hiddenWord.next([]);
  }

  isLetterInWord(letter: string): boolean {
    this.tries.next(this.tries.value + 1);
    if (this.word.value.includes(letter)) {
      const letterIndex = this.word.value.indexOf(letter);
      this.hiddenWord.value[letterIndex] = letter;
      return true;
    }
    return false;
  }

  hiddenWordIsFound(): boolean {
    return this.word.value.join('') === this.hiddenWord.value.join('');
  }
}
