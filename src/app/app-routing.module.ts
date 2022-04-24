import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { HangmanComponent } from './views/hangman/hangman.component';
import { AuthGuard } from './guards/auth.guard';
import { ResultComponent } from './views/result/result.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hangman', canActivate: [AuthGuard], component: HangmanComponent },
  { path: 'result', canActivate: [AuthGuard], component: ResultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
