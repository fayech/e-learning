import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignantLayoutComponent } from './enseignant-layout.component';

describe('EnseignantLayoutComponent', () => {
  let component: EnseignantLayoutComponent;
  let fixture: ComponentFixture<EnseignantLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnseignantLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseignantLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
