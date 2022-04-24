import { TestBed } from '@angular/core/testing';

import { WordService } from '../word/word.service';
import { HttpClientModule } from '@angular/common/http';

describe('WordService', () => {
  let service: WordService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(WordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
