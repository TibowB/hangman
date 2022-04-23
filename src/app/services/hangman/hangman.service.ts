import { Injectable } from '@angular/core';
import { AlphabetService } from '../alphabet/alphabet.service';
import { WordService } from '../word/word.service';

@Injectable({
  providedIn: 'root',
})
export class HangmanService {
  private _word: string[] = [];
  private _hiddenWord: string[] = [];

  constructor(
    private alphabetService: AlphabetService,
    private wordService: WordService
  ) {}

  prepareGame(): void {
    this._word = this.wordService.getRandomWord();
    this._hiddenWord = this.wordService.getHiddenWord(this._word);
  }

  getAlphabet(): string[] {
    return this.alphabetService.getAlphabet();
  }

  setRandomWord(): void {
    this._word = this.wordService.getRandomWord();
  }

  removeWord(): void {
    this._word = [];
    this._hiddenWord = [];
  }

  public get word(): string[] {
    return this._word;
  }
  public set word(value: string[]) {
    this._word = value;
  }

  public get hiddenWord(): string[] {
    return this._hiddenWord;
  }
  public set hiddenWord(value: string[]) {
    this._hiddenWord = value;
  }
}
