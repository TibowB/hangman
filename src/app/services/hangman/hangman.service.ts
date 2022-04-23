import { Injectable } from '@angular/core';
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

  removeWord(): void {
    this.word.next([]);
    this.hiddenWord.next([]);
  }

  isLetterInWord(letter: string): boolean {
    if (this.word.value.includes(letter)) {
      const letterIndex = this.word.value.indexOf(letter);
      this.hiddenWord.value[letterIndex] = letter;
      return true;
    }
    return false;
  }

  hiddenWordIsFound(): boolean {
    return (
      this.word.value.toString().replaceAll(',', '') ===
      this.hiddenWord.value.toString().replaceAll(',', '')
    );
  }
}
