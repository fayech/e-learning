import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantCalendarComponent } from './etudiant-calendar.component';

describe('EtudiantCalendarComponent', () => {
  let component: EtudiantCalendarComponent;
  let fixture: ComponentFixture<EtudiantCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtudiantCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudiantCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
