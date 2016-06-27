
import { Injectable } from 'angular2/core'
import { Http } from 'angular2/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GithubService {

  private _urlUsers = "https://api.github.com/users/";

  constructor(private _http: Http) { }

  getGithubInfoFor(username: string) {

    var urlUsers = `${ this._urlUsers }${ username }`;
    var urlFollowers = `${ urlUsers }/followers`;

    return Observable.forkJoin(
        this._http.get(urlUsers),
        this._http.get(urlFollowers)
    ).map(res => {
      return { userInfo: res[0].json(), userFollowers: res[1].json() }
    });
  }
}
