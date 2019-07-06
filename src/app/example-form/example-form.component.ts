import {Component, OnInit} from '@angular/core';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'example-form',
  templateUrl: './example-form.component.html',
  styleUrls: ['./example-form.component.less']
})
export class ExampleFormComponent implements OnInit {

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
}
