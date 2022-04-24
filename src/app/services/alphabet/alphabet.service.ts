import { Injectable } from '@angular/core';
import { IAlplhabetService } from '../../interfaces/IAlphabetService';

@Injectable({
  providedIn: 'root',
})
export class AlphabetService implements IAlplhabetService {
  alphabet: string = 'abcdefghijklmnopqrstuvwxyz';

  constructor() {}

  getAlphabet(): string[] {
    return this.alphabet.toUpperCase().split('');
  }
}
