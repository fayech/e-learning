import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignantProfilComponent } from './enseignant-profil.component';

describe('EnseignantProfilComponent', () => {
  let component: EnseignantProfilComponent;
  let fixture: ComponentFixture<EnseignantProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnseignantProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseignantProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
