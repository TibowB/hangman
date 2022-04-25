import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { routes } from '../../app-routing.module';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { HangmanService } from '../../services/hangman/hangman.service';

describe('HomeComponent', () => {
  let router: Router;
  let location: Location;
  let component: HomeComponent;
  let hangmanService: HangmanService;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [Location],
      imports: [HttpClientModule, RouterTestingModule.withRoutes(routes)],
      declarations: [HomeComponent, ButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    hangmanService = TestBed.inject(HangmanService);
  });

  it('should call the method onClickStartGameOnePlayer() when we click on the button "OnePlayer"', fakeAsync(() => {
    spyOn(component, 'onClickStartGameOnePlayer');

    fixture.detectChanges();
    const onePlayerButton = fixture.debugElement.nativeElement.querySelector(
      'app-button:first-of-type'
    );

    onePlayerButton.click();
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.onClickStartGameOnePlayer).toHaveBeenCalled();
    });
  }));

  it('should call the method onClickStartGameTwoPlayer() when we click on the button "TwoPlayer"', fakeAsync(() => {
    spyOn(component, 'onClickStartGameTwoPlayer');

    fixture.detectChanges();

    const twoPlayerButton = fixture.debugElement.nativeElement.querySelector(
      'app-button:last-of-type'
    );

    twoPlayerButton.click();
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.onClickStartGameTwoPlayer).toHaveBeenCalled();
    });
  }));
});
