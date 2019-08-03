import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCourseDemoComponent } from './new-course-demo.component';

describe('NewCourseDemoComponent', () => {
  let component: NewCourseDemoComponent;
  let fixture: ComponentFixture<NewCourseDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCourseDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCourseDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
