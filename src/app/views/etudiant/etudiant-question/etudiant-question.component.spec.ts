import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantQuestionComponent } from './etudiant-question.component';

describe('EtudiantQuestionComponent', () => {
  let component: EtudiantQuestionComponent;
  let fixture: ComponentFixture<EtudiantQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtudiantQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudiantQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
