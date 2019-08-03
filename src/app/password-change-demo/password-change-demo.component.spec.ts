import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordChangeDemoComponent } from './password-change-demo.component';

describe('PasswordChangeDemoComponent', () => {
  let component: PasswordChangeDemoComponent;
  let fixture: ComponentFixture<PasswordChangeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordChangeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordChangeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
