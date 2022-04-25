import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { HangmanService } from '../hangman/hangman.service';

describe('HangmanService', () => {
  let service: HangmanService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(HangmanService);
  });

  it('should insanciate default game object', () => {
    expect(service.game.value).toEqual({
      word: [],
      hiddenWord: [],
      tries: 0,
      isWordFound: false,
    });
  });

  it('should return false from isGameOver() if tries is not equal to 11', () => {
    service.game.next({
      word: [],
      hiddenWord: [],
      tries: 10,
      isWordFound: false,
    });

    expect(service.isGameOver()).toBeFalse();
  });

  it('should return true from isGameOver() if tries is equal to 11', () => {
    service.game.next({
      word: [],
      hiddenWord: [],
      tries: 11,
      isWordFound: false,
    });
    expect(service.isGameOver()).toBeTrue();
  });

  it('should return true from hiddenWordIsFound() if word and hiddenWord are equals', () => {
    service.game.next({
      word: ['F', 'O', 'O'],
      hiddenWord: ['F', 'O', 'O'],
      tries: 0,
      isWordFound: true,
    });
    expect(service.hiddenWordIsFound()).toBeTrue();
  });

  it('should return false from hiddenWordIsFound() if word and hiddenWord are not equals', () => {
    service.game.next({
      word: ['F', 'O', 'O'],
      hiddenWord: ['_', '_', '_'],
      tries: 0,
      isWordFound: false,
    });
    expect(service.hiddenWordIsFound()).toBeFalse();
  });

  it('should return true if a submited letter is in the word', () => {
    service.game.next({
      word: ['F', 'O', 'O'],
      hiddenWord: ['_', '_', '_'],
      tries: 0,
      isWordFound: true,
    });

    expect(service.isLetterInWord('O')).toBeTrue();
  });

  it('should return false if a submited letter is not in the word', () => {
    service.game.next({
      word: ['F', 'O', 'O'],
      hiddenWord: ['_', '_', '_'],
      tries: 0,
      isWordFound: true,
    });

    expect(service.isLetterInWord('B')).toBeFalse();
  });

  it('should handle letter submission and update the game object', () => {
    service.game.next({
      word: ['F', 'O', 'O'],
      hiddenWord: ['_', '_', '_'],
      tries: 0,
      isWordFound: true,
    });

    service.handleLetterSubmission('O');

    expect(service.game.value.hiddenWord).toEqual(['_', 'O', 'O']);
    expect(service.game.value.tries).toEqual(0);

    service.handleLetterSubmission('B');

    expect(service.game.value.hiddenWord).toEqual(['_', 'O', 'O']);
    expect(service.game.value.tries).toEqual(1);
  });
});
