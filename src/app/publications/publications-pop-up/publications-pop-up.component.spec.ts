import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationsPopUpComponent } from './publications-pop-up.component';

describe('PublicationsPopUpComponent', () => {
  let component: PublicationsPopUpComponent;
  let fixture: ComponentFixture<PublicationsPopUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicationsPopUpComponent]
    });
    fixture = TestBed.createComponent(PublicationsPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
