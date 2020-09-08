import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingupProfileComponent } from './singup-profile.component';

describe('SingupProfileComponent', () => {
  let component: SingupProfileComponent;
  let fixture: ComponentFixture<SingupProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingupProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingupProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
