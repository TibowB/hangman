export interface IWordService {
  getRandomWord(): string[];

  getHiddenWord(word: string[]): string[];

  getWordAsString(word: string[]): string;
}
