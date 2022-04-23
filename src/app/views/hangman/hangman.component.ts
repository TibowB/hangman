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

  constructor(private hangmanService: HangmanService) {}

  ngOnInit(): void {
    this.hangmanService.prepareGame();
    this.alphabet = this.hangmanService.getAlphabet();
    this.hiddenWord = this.hangmanService.hiddenWord;
    this.word = this.hangmanService.word;
    this.hangmanImagePath = `assets/GUESS_${this.try}.svg`;
  }

  ngOnDestroy(): void {
    this.hiddenWord = [];
    this.word = [];
    this.hangmanService.removeWord();
  }

  onClickSubmitLetter(event: Event, letter: string) {
    (event.target as HTMLElement).classList.replace(
      'letter',
      'letter--clicked'
    );
    this.try++;
    this.hangmanImagePath = `assets/GUESS_${this.try}.svg`;
    console.log(this.try);
    console.log(letter);
  }
}
