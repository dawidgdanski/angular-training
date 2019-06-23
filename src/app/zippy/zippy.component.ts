import {AfterContentInit, Component, ContentChild, ElementRef, Input, OnInit} from '@angular/core';
import {ExampleDirective} from '../example.directive';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.less']
})
export class ZippyComponent implements OnInit, AfterContentInit {

  @Input()
  title: string;

  @ContentChild(ExampleDirective, {read: ElementRef})
  private content: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    if (this.content) {
      console.log(this.content.nativeElement.innerText);
    }
  }
}
