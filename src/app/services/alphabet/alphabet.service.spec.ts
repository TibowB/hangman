import { TestBed } from '@angular/core/testing';

import { AlphabetService } from '../alphabet/alphabet.service';

describe('AlphabetService', () => {
  let service: AlphabetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlphabetService);
  });

  it('should have a variable "alphabet" containing the alphabet', () => {
    expect(service.alphabet).toEqual('abcdefghijklmnopqrstuvwxyz');
  });

  it('getAlphabet() returns an array contaning the alphabet in uppercase', () => {
    const arrayAlphabet = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
    ];
    expect(service.getAlphabet()).toEqual(arrayAlphabet);
  });
});
