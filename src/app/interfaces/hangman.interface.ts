import { BehaviorSubject } from 'rxjs';
import { Game } from '../types/Game';

export interface Hangman {
  game: BehaviorSubject<Game>;

  prepareGame(): void;

  getTries(): number;

  handleLetterSubmission(letter: string): void;

  isLetterInWord(letter: string): boolean;

  updateHiddenWord(letter: string): void;

  updateGameTries(increment: boolean): void;

  hiddenWordIsFound(): boolean;

  isGameOver(): boolean;
}
