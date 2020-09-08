import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignantChatComponent } from './enseignant-chat.component';

describe('EnseignantChatComponent', () => {
  let component: EnseignantChatComponent;
  let fixture: ComponentFixture<EnseignantChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnseignantChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseignantChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
