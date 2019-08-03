import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubFollowingComponent } from './github-following.component';

describe('GithubFollowingComponent', () => {
  let component: GithubFollowingComponent;
  let fixture: ComponentFixture<GithubFollowingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubFollowingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubFollowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
