import {Component, Input} from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.less']
})
export class ZippyComponent {

  @Input()
  title: string;

  isItemCollapsed: boolean = false;

  onIconClicked(isItemCollapsed: boolean) {
    this.isItemCollapsed = isItemCollapsed;
  }
}
