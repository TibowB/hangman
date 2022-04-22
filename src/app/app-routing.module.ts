import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { HangmanComponent } from './views/hangman/hangman.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hangman', component: HangmanComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
