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

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
