import { Injectable } from '@angular/core';
import { AlphabetService } from '../alphabet/alphabet.service';

@Injectable({
  providedIn: 'root',
})
export class HangmanService {
  constructor(private alphabetService: AlphabetService) {}

  getAlphabet(): string[] {
    return this.alphabetService.getAlphabet();
  }
}
