import { Component, OnInit } from '@angular/core';
import { HangmanService } from '../../services/hangman/hangman.service';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.scss'],
})
export class HangmanComponent implements OnInit {
  hiddenWord: string[] = [];
  alphabet: string[] = [];
  hangmanImagePath: string = '';
  try: number = 1;

  constructor(private hangmanService: HangmanService) {}

  ngOnInit(): void {
    this.hangmanImagePath = `assets/GUESS_${this.try}.svg`;
    this.alphabet = this.hangmanService.getAlphabet();
    this.hiddenWord = ['_', '_', '_', '_', '_'];
  }
  onClickSubmitLetter(letter: string) {
    console.log(letter);
  }
}
