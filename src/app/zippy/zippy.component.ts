import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.less']
})
export class ZippyComponent implements OnInit {

  @Input()
  title: string;

  constructor() {
  }

  ngOnInit() {
  }

}
