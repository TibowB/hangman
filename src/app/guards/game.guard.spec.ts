import { TestBed } from '@angular/core/testing';

import { GameGuard } from './game.guard';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('GameGuard', () => {
  let guard: GameGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
    });
    guard = TestBed.inject(GameGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
