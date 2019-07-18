import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.less']
})
export class PasswordChangeComponent implements OnInit {

  form: FormGroup; //= new FormGroup({
  //   passwords: new FormGroup({
  //     oldPassword: new FormControl(),
  //     newPassword: new FormControl(),
  //     confirmPassword: new FormControl()
  //   })
  // });

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      passwords: fb.group({
        oldPassword: ['', Validators.required],
        newPassword: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      })
    });
  }

  ngOnInit() {
  }

}