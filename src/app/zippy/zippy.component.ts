import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.less']
})
export class ZippyComponent implements AfterViewInit {

  @Input()
  title: string;

  @ViewChild('summary', {read: ElementRef})
  summaryText: ElementRef;

  constructor(private element: ElementRef) {

  }

  ngAfterViewInit(): void {
    console.log(this.element.nativeElement.innerText);
    this.summaryText.nativeElement.innerText = this.element.nativeElement.innerText
  }
}
