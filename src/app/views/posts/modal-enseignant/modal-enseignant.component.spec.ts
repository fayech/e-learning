import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEnseignantComponent } from './modal-enseignant.component';

describe('ModalEnseignantComponent', () => {
  let component: ModalEnseignantComponent;
  let fixture: ComponentFixture<ModalEnseignantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEnseignantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
