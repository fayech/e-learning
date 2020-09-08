import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantDocumentComponent } from './etudiant-document.component';

describe('EtudiantDocumentComponent', () => {
  let component: EtudiantDocumentComponent;
  let fixture: ComponentFixture<EtudiantDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtudiantDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudiantDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
