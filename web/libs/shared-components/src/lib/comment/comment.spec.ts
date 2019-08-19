import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comment } from './comment';

describe('CommentComponent', () => {
  let component: Comment;
  let fixture: ComponentFixture<Comment>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comment ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
