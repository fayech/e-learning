import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsEnseignantComponent } from './posts-enseignant.component';

describe('PostsEnseignantComponent', () => {
  let component: PostsEnseignantComponent;
  let fixture: ComponentFixture<PostsEnseignantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsEnseignantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
