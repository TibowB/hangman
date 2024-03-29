import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WordService } from 'src/app/services/word/word.service';
import { HangmanService } from '../../services/hangman/hangman.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  isWordFound: boolean = false;
  word: string = '';
  tries: number = 0;

  constructor(
    private wordService: WordService,
    private hangmanService: HangmanService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isWordFound = this.hangmanService.game.value.isWordFound;
    this.word = this.wordService.getWordAsString(
      this.hangmanService.game.value.word
    );
  }

  onClickPlayAgain() {
    this.hangmanService.prepareGame();
    this.router.navigate(['hangman']);
  }
}
