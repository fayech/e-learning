import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignantModelDComponent } from './enseignant-model-d.component';

describe('EnseignantModelDComponent', () => {
  let component: EnseignantModelDComponent;
  let fixture: ComponentFixture<EnseignantModelDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnseignantModelDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseignantModelDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
