import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousPopUpComponent } from './previous-pop-up.component';

describe('PreviousPopUpComponent', () => {
  let component: PreviousPopUpComponent;
  let fixture: ComponentFixture<PreviousPopUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreviousPopUpComponent]
    });
    fixture = TestBed.createComponent(PreviousPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
