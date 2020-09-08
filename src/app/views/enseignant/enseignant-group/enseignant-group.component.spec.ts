import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignantGroupComponent } from './enseignant-group.component';

describe('EnseignantGroupComponent', () => {
  let component: EnseignantGroupComponent;
  let fixture: ComponentFixture<EnseignantGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnseignantGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseignantGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
