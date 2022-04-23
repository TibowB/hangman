import { Component, OnInit, OnDestroy } from '@angular/core';
import { HangmanService } from '../../services/hangman/hangman.service';

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
  try: number = 0;

  isLetterInWord: boolean = false;
  isHiddenWordFound: boolean = false;

  constructor(private hangmanService: HangmanService) {}

  ngOnInit(): void {
    this.hangmanService.prepareGame();
    this.alphabet = this.hangmanService.getAlphabet();
    this.hangmanService.hiddenWord.subscribe(
      (value) => (this.hiddenWord = value)
    );
    this.hangmanService.word.subscribe((value) => (this.word = value));
    this.hangmanImagePath = `assets/GUESS_${this.try}.svg`;
  }

  ngOnDestroy(): void {
    this.hiddenWord = [];
    this.word = [];
    this.hangmanService.removeWord();
  }

  onClickSubmitLetter(event: Event, letter: string) {
    // this.hiddenWord = this.hangmanService.hiddenWord.value;
    (event.target as HTMLElement).classList.replace(
      'letter',
      'letter--clicked'
    );
    this.try++;
    this.isLetterInWord = this.hangmanService.isLetterInWord(letter);
    this.isHiddenWordFound = this.hangmanService.hiddenWordIsFound();
    if (!this.isLetterInWord) {
      this.hangmanImagePath = `assets/GUESS_${this.try}.svg`;
    }
    console.log(this.isHiddenWordFound);
  }
}
