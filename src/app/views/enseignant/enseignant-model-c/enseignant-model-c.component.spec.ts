import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignantModelCComponent } from './enseignant-model-c.component';

describe('EnseignantModelCComponent', () => {
  let component: EnseignantModelCComponent;
  let fixture: ComponentFixture<EnseignantModelCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnseignantModelCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseignantModelCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
