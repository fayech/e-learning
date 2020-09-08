import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignantModelGComponent } from './enseignant-model-g.component';

describe('EnseignantModelGComponent', () => {
  let component: EnseignantModelGComponent;
  let fixture: ComponentFixture<EnseignantModelGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnseignantModelGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseignantModelGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
