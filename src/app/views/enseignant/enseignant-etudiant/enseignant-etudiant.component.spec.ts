import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignantEtudiantComponent } from './enseignant-etudiant.component';

describe('EnseignantEtudiantComponent', () => {
  let component: EnseignantEtudiantComponent;
  let fixture: ComponentFixture<EnseignantEtudiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnseignantEtudiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseignantEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
