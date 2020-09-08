import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordEtudiantComponent } from './password-etudiant.component';

describe('PasswordEtudiantComponent', () => {
  let component: PasswordEtudiantComponent;
  let fixture: ComponentFixture<PasswordEtudiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordEtudiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
