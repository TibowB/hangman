import { Component, OnInit } from '@angular/core';
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

  constructor(private hangmanService: HangmanService) {}

  ngOnInit(): void {
    this.isWordFound = this.hangmanService.hiddenWordIsFound();
    this.word = this.hangmanService.getWordAsString();
    this.tries = this.hangmanService.getTries();
  }
}
