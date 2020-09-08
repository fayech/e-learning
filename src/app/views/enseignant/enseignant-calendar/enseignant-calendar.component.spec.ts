import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignantCalendarComponent } from './enseignant-calendar.component';

describe('EnseignantCalendarComponent', () => {
  let component: EnseignantCalendarComponent;
  let fixture: ComponentFixture<EnseignantCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnseignantCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseignantCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
