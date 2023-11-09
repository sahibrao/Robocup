import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksPopUpComponent } from './links-pop-up.component';

describe('LinksPopUpComponent', () => {
  let component: LinksPopUpComponent;
  let fixture: ComponentFixture<LinksPopUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinksPopUpComponent]
    });
    fixture = TestBed.createComponent(LinksPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
