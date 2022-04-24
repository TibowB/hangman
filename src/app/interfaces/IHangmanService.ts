import { BehaviorSubject } from 'rxjs';
import { Game } from '../types/Game';

export interface IHangmanService {
  game: BehaviorSubject<Game>;

  prepareGame(): void;

  getTries(): number;

  isLetterInWord(letter: string): boolean;

  hiddenWordIsFound(): boolean;
}
