import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleFormDemoComponent } from './example-form-demo.component';

describe('ExampleFormDemoComponent', () => {
  let component: ExampleFormDemoComponent;
  let fixture: ComponentFixture<ExampleFormDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleFormDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleFormDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
