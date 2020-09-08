import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailEtudiantComponent } from './email-etudiant.component';

describe('EmailEtudiantComponent', () => {
  let component: EmailEtudiantComponent;
  let fixture: ComponentFixture<EmailEtudiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailEtudiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
