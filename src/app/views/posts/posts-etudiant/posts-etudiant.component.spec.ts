import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsEtudiantComponent } from './posts-etudiant.component';

describe('PostsEtudiantComponent', () => {
  let component: PostsEtudiantComponent;
  let fixture: ComponentFixture<PostsEtudiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsEtudiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
