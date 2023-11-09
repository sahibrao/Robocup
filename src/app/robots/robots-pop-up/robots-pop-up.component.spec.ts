import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotsPopUpComponent } from './robots-pop-up.component';

describe('RobotsPopUpComponent', () => {
  let component: RobotsPopUpComponent;
  let fixture: ComponentFixture<RobotsPopUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RobotsPopUpComponent]
    });
    fixture = TestBed.createComponent(RobotsPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
