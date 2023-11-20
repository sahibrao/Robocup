import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersPopUpComponent } from './members-pop-up.component';

describe('MembersPopUpComponent', () => {
  let component: MembersPopUpComponent;
  let fixture: ComponentFixture<MembersPopUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MembersPopUpComponent]
    });
    fixture = TestBed.createComponent(MembersPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
