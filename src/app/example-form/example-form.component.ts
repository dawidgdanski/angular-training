import {Component, OnInit} from '@angular/core';
import {NgForm, NgModel} from '@angular/forms';

@Component({
  selector: 'example-form',
  templateUrl: './example-form.component.html',
  styleUrls: ['./example-form.component.less']
})
export class ExampleFormComponent implements OnInit {

  courseTypes = [
    {id: 1, name: 'Type 1'},
    {id: 2, name: 'Type 2'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

  logCourseInputChange(course: NgModel) {
    console.log(course);
  }

  logCategoryInputChange(category: NgModel) {
    console.log(category);
  }

  submit(formElement: NgForm) {
    console.log(formElement);
  }
}
