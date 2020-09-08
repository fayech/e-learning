import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignantModelEComponent } from './enseignant-model-e.component';

describe('EnseignantModelEComponent', () => {
  let component: EnseignantModelEComponent;
  let fixture: ComponentFixture<EnseignantModelEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnseignantModelEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseignantModelEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
