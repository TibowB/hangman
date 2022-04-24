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

  it('should return false from isGameOver() if tries is not equal to 11, otherwise it returns true', () => {
    // Tries = 0
    expect(service.isGameOver()).toBeFalse();

    // Tries = 10
    service.game.next({
      word: [],
      hiddenWord: [],
      tries: 10,
      isWordFound: false,
    });
    expect(service.isGameOver()).toBeFalse();

    // Tries = 11
    service.game.next({
      word: [],
      hiddenWord: [],
      tries: 11,
      isWordFound: false,
    });
    expect(service.isGameOver()).toBeTrue();
  });

  it('should return true from hiddenWordIsFound() if word and hiddenWord are equals, otherwise it returns false', () => {
    // Word !== HiddenWord
    service.game.next({
      word: ['F', 'O', 'O'],
      hiddenWord: ['_', '_', '_'],
      tries: 0,
      isWordFound: false,
    });
    expect(service.hiddenWordIsFound()).toBeFalse();

    // Word === HiddenWord
    service.game.next({
      word: ['F', 'O', 'O'],
      hiddenWord: ['F', 'O', 'O'],
      tries: 0,
      isWordFound: true,
    });
    expect(service.hiddenWordIsFound()).toBeTrue();
  });

  it('should return true and update the hiddenWord if a submited letter is the word, otherwise it returns false', () => {
    service.game.next({
      word: ['F', 'O', 'O'],
      hiddenWord: ['_', '_', '_'],
      tries: 0,
      isWordFound: true,
    });

    expect(service.isLetterInWord('O')).toBeTrue();
    expect(service.game.value.hiddenWord).toEqual(['_', 'O', 'O']);

    expect(service.isLetterInWord('B')).toBeFalse();
    expect(service.game.value.hiddenWord).toEqual(['_', 'O', 'O']);
  });
});
