import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeDemoComponent } from './like-demo.component';

describe('LikeDemoComponent', () => {
  let component: LikeDemoComponent;
  let fixture: ComponentFixture<LikeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
