import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailEnseignantComponent } from './email-enseignant.component';

describe('EmailEnseignantComponent', () => {
  let component: EmailEnseignantComponent;
  let fixture: ComponentFixture<EmailEnseignantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailEnseignantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
