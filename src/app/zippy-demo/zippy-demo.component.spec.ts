import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZippyDemoComponent } from './zippy-demo.component';

describe('ZippyDemoComponent', () => {
  let component: ZippyDemoComponent;
  let fixture: ComponentFixture<ZippyDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZippyDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZippyDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
