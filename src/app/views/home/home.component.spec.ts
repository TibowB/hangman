import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { routes } from '../../app-routing.module';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

describe('HomeComponent', () => {
  let router: Router;
  let location: Location;
  let component: HomeComponent;
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
  });

  it('should call the method onClickStartGame() when we click on the button "Play"', fakeAsync(() => {
    spyOn(component, 'onClickStartGame');

    const onePlayerButton =
      fixture.debugElement.nativeElement.querySelector('app-button');

    onePlayerButton.click();

    expect(component.onClickStartGame).toHaveBeenCalled();
  }));
});
