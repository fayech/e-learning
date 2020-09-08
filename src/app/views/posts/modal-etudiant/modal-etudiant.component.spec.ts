import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEtudiantComponent } from './modal-etudiant.component';

describe('ModalEtudiantComponent', () => {
  let component: ModalEtudiantComponent;
  let fixture: ComponentFixture<ModalEtudiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEtudiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
