import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantChatComponent } from './etudiant-chat.component';

describe('EtudiantChatComponent', () => {
  let component: EtudiantChatComponent;
  let fixture: ComponentFixture<EtudiantChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtudiantChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudiantChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
