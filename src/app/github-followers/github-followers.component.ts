import {Component, OnInit} from '@angular/core';
import {HttpService} from '../service/http.service';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.less']
})
export class GithubFollowersComponent implements OnInit {

  constructor(private httpService: HttpService) {
    
  }

  ngOnInit() {
  }

}
