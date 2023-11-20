import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposPopUpComponent } from './repos-pop-up.component';

describe('ReposPopUpComponent', () => {
  let component: ReposPopUpComponent;
  let fixture: ComponentFixture<ReposPopUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReposPopUpComponent]
    });
    fixture = TestBed.createComponent(ReposPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
