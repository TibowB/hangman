import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HangmanService } from '../../services/hangman/hangman.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private hangmanService: HangmanService, private router: Router) {}

  ngOnInit(): void {}

  onClickStartGameOnePlayer() {
    this.hangmanService.prepareGame();
    this.router.navigate(['hangman']);
  }

  onClickStartGameTwoPlayer() {}
}
