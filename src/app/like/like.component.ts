import {Component, OnInit} from '@angular/core';

enum IconClass {
  POSITIVE = 'positive',
  NEGATIVE = 'negative'
}

@Component({
  selector: 'like-button',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.less']
})
export class LikeComponent implements OnInit {

  isLiked: boolean;

  text: string;

  constructor() {
    this.onLikeStateChanged(false);
  }

  ngOnInit() {
  }

  getIconClass(): IconClass {
    return this.isLiked ? IconClass.POSITIVE : IconClass.NEGATIVE;
  }

  onLikeStateChanged(isLiked: boolean) {
    this.isLiked = isLiked;
    this.text = isLiked ? '1' : '0';
  }
}
