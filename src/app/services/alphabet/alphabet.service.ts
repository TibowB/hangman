import { Injectable } from '@angular/core';
import { Alphabet } from '../../interfaces/alphabet.interface';

@Injectable({
  providedIn: 'root',
})
export class AlphabetService implements Alphabet {
  alphabet: string = 'abcdefghijklmnopqrstuvwxyz';

  constructor() {}

  getAlphabet(): string[] {
    return this.alphabet.toUpperCase().split('');
  }
}
