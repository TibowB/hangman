import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WordService {
  words: string[] = ['cat', 'dog', 'fish', 'cow'];

  constructor() {}

  getRandomWord(): string[] {
    return this.words[Math.floor(Math.random() * this.words.length)]
      .toUpperCase()
      .split('');
  }

  getHiddenWord(word: string[]): string[] {
    return word.map(() => '_');
  }
}
