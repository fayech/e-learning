import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignantDocumentComponent } from './enseignant-document.component';

describe('EnseignantDocumentComponent', () => {
  let component: EnseignantDocumentComponent;
  let fixture: ComponentFixture<EnseignantDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnseignantDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseignantDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
