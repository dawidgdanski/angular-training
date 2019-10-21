import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private GITHUB_HOST = 'https://api.github.com';

  constructor(private httpClient: HttpClient) {
    this.getGithubFollowers('dawidgdanski')
      .subscribe(response => {

          console.log('RESPONSE: ' + response);
        },
        error => {
          console.log('ERROR: ' + error);
        })
  }

  getGithubFollowers(username: string): Observable<GithubFollower> {
    return this.httpClient.get<GithubFollower>(`${this.GITHUB_HOST}/users/${username}/followers`);
  }
}
