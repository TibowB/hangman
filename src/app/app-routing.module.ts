import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { HangmanComponent } from './views/hangman/hangman.component';
import { GameGuard } from './guards/game.guard';
import { ResultComponent } from './views/result/result.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hangman', canActivate: [GameGuard], component: HangmanComponent },
  { path: 'result', canActivate: [GameGuard], component: ResultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
