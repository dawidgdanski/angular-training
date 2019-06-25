import {Component, Input} from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.less']
})
export class ZippyComponent {

  @Input()
  title: string;

  isItemExpanded: boolean = false;

  onItemStateChanged(isItemExpanded: boolean) {
    this.isItemExpanded = isItemExpanded;
  }
}
