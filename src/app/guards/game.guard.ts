import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { HangmanService } from '../services/hangman/hangman.service';

@Injectable({
  providedIn: 'root',
})
export class GameGuard implements CanActivate {
  constructor(private hangmanService: HangmanService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const wordLength = this.hangmanService.game.value.word.length;

    if (wordLength === 0) {
      return this.router.navigate(['']);
    }

    return true;
  }
}
