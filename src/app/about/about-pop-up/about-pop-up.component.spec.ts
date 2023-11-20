import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPopUpComponent } from './about-pop-up.component';

describe('AboutPopUpComponent', () => {
  let component: AboutPopUpComponent;
  let fixture: ComponentFixture<AboutPopUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutPopUpComponent]
    });
    fixture = TestBed.createComponent(AboutPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
