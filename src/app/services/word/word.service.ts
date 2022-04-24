import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { Word } from '../../interfaces/word.interface';

@Injectable({
  providedIn: 'root',
})
export class WordService implements Word {
  // private randomWordApiUrl = 'https://random-word-api.herokuapp.com/word';
  words: string[] = ['cat', 'dog', 'fish', 'cow'];

  constructor(private http: HttpClient) {}

  getRandomWord(): string[] {
    // return this.http.get(this.randomWordApiUrl);
    return this.words[Math.floor(Math.random() * this.words.length)]
      .toUpperCase()
      .split('');
  }

  getHiddenWord(word: string[]): string[] {
    return word.map(() => '_');
  }

  getWordAsString(word: string[]): string {
    return word.join('');
  }
}
