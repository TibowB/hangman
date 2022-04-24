import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { HangmanService } from '../../services/hangman/hangman.service';
import { AlphabetService } from '../../services/alphabet/alphabet.service';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.scss'],
})
export class HangmanComponent implements OnInit, OnDestroy {
  hiddenWord: string[] = [];
  word: string[] = [];
  alphabet: string[] = [];
  hangmanImagePath: string = '';
  tries: number = 0;

  constructor(
    private alphabetService: AlphabetService,
    private hangmanService: HangmanService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.hangmanService.prepareGame();
    this.alphabet = this.alphabetService.getAlphabet();
    this.hangmanService.game.subscribe(
      (game) => (this.hiddenWord = game.hiddenWord)
    );
    this.hangmanService.game.subscribe((game) => (this.word = game.word));
    this.hangmanService.game.subscribe((game) => (this.tries = game.tries));
    this.setImagePath();
  }

  ngOnDestroy(): void {}

  onClickSubmitLetter(event: Event, letter: string) {
    // this.hiddenWord = this.hangmanService.hiddenWord.value;
    (event.target as HTMLElement).classList.replace(
      'letter',
      'letter--clicked'
    );

    const isLetterInWord = this.hangmanService.isLetterInWord(letter);
    const isHiddenWordFound = this.hangmanService.hiddenWordIsFound();

    if (isHiddenWordFound) {
      this.router.navigateByUrl('result');
    }

    if (!isLetterInWord) {
      this.setImagePath();
    }
  }

  setImagePath(): void {
    this.hangmanImagePath = `assets/GUESS_${this.tries}.svg`;
  }
}
