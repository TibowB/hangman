import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { ResultComponent } from './result.component';
import { HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ResultComponent, ButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call the method onClickPlayAgain() when we click on the button "Play Again"', fakeAsync(() => {
    spyOn(component, 'onClickPlayAgain');

    const onePlayerButton =
      fixture.debugElement.nativeElement.querySelector('app-button');

    onePlayerButton.click();

    expect(component.onClickPlayAgain).toHaveBeenCalled();
  }));
});
