import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePage404Component } from './home-page404.component';

describe('HomePage404Component', () => {
  let component: HomePage404Component;
  let fixture: ComponentFixture<HomePage404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
