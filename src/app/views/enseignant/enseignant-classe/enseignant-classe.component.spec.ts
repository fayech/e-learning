import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignantClasseComponent } from './enseignant-classe.component';

describe('EnseignantClasseComponent', () => {
  let component: EnseignantClasseComponent;
  let fixture: ComponentFixture<EnseignantClasseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnseignantClasseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseignantClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
