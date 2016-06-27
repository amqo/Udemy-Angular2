import { Component, OnInit } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';

import { GithubService } from './services/github.service';

@Component({
    selector: 'github-profile',
    templateUrl: 'app/templates/github.template.html',
    providers: [GithubService, HTTP_PROVIDERS]
})

export class GithubProfileComponent implements OnInit {

  isLoading = true;

  userInfo = {}
  userFollowers = []

  ngOnInit() {
    this._githubService.getGithubInfoFor('octocat')
      .subscribe(res => {
        this.userInfo = res.userInfo;
        this.userFollowers = res.userFollowers;
      }, null, () => {
        this.isLoading = false;
      });
  }

  constructor(private _githubService: GithubService) { }

}
