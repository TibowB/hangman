import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { GameGuard } from './game.guard';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../app-routing.module';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { HangmanService } from '../services/hangman/hangman.service';

describe('GameGuard', () => {
  let router: Router;
  let location: Location;
  let guard: GameGuard;
  let hangmanService: HangmanService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Location],
      imports: [HttpClientModule, RouterTestingModule.withRoutes(routes)],
    });
    guard = TestBed.inject(GameGuard);
    hangmanService = TestBed.inject(HangmanService);
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    router.initialNavigation();
  });

  it('should redirect to the home page when we try to access the "hangman" route', fakeAsync(() => {
    router.navigate(['hangman']);
    tick();
    expect(location.path()).toBe('');
  }));

  it('should stay on the hangman page if the game is started', fakeAsync(() => {
    hangmanService.game.next({
      word: ['F', 'O', 'O'],
      hiddenWord: [],
      tries: 0,
      isWordFound: false,
    });
    router.navigate(['hangman']);
    tick();
    expect(location.path()).toBe('/hangman');
  }));
});
