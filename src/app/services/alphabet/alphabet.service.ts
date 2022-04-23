import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlphabetService {
  alphabet: string = 'abcdefghijklmnopqrstuvwxyz';

  constructor() {}

  getAlphabet(): string[] {
    return this.alphabet.toUpperCase().split('');
  }
}
