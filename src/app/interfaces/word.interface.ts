export interface Word {
  getRandomWord(): string[];

  getHiddenWord(word: string[]): string[];

  getWordAsString(word: string[]): string;
}
