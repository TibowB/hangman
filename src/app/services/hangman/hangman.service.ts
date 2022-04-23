import { Injectable } from '@angular/core';
import { AlphabetService } from '../alphabet/alphabet.service';

@Injectable({
  providedIn: 'root',
})
export class HangmanService {
  private _word: string[] = [];

  constructor(private alphabetService: AlphabetService) {}

  getAlphabet(): string[] {
    return this.alphabetService.getAlphabet();
  }

  public get word(): string[] {
    return this._word;
  }
  public set word(value: string[]) {
    this._word = value;
  }
}
