import { Injectable } from 'angular2/core'
import { Http } from 'angular2/http';

import { User } from './user';

import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

  private _url = "http://jsonplaceholder.typicode.com/users";

  constructor(private _http: Http) { }

  getUsers() {
    return this._http.get(this._url)
      .map(res => res.json());
  }

  getUser(userId) {
    return this._http.get(`${this._url}/${userId}`)
      .map(res => res.json());
  }

  postUser(user) {
    return this._http.post(this._url, JSON.stringify(user))
      .map(res => res.json());
  }

}