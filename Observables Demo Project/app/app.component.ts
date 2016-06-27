/// <reference path="../typings/tsd.d.ts" />

import { Component, OnInit } from 'angular2/core';

import { HTTP_PROVIDERS } from 'angular2/http';
import { Observable } from 'rxjs/Rx';

import { PostService } from './services/post.service';
import { SpotifyService } from './services/spotify.service';
import { GithubService } from './services/github.service';


@Component({
    selector: 'my-app',
    templateUrl: 'app/main.template.html',
    providers: [SpotifyService, PostService, GithubService, HTTP_PROVIDERS]
})
export class AppComponent implements OnInit {

  isLoading = true;
  isLoadingGithub = true;
  userInfo = {}
  userFollowers = []

  constructor(
    private _spotifyService: SpotifyService,
    private _postService: PostService,
    private _githubService: GithubService
  ) {
      // this._postService.createPost(
      //   {userId: 1, title: "a", body: "b"}
      // );
  }

  ngOnInit() {
    this.getPostsFromService();
    this.initSearchInput();
    this.initGithubSearchInput();
  }

  getPostsFromService() {
    this._postService.getPosts()
      .subscribe(posts => {
        setTimeout(() => this.isLoading = false, 500);
        this.content = posts[0].body;
      });

      this._postService.getPostsPromise()
        .then(posts => {
          setTimeout(() => this.isLoading = false, 500);
          console.log(posts[0].body)
        });
  }

  initGithubSearchInput() {

    this._githubService.getGithubInfoFor('octocat')
      .subscribe(res => {
        this.userInfo = res.userInfo;
        this.userFollowers = res.userFollowers;
      }, null, () => {
        this.isLoadingGithub = false;
      }));
  }

  initSearchInput() {
    var keyups = Observable.fromEvent($("#search"), "keyup")
      .map(event => event.target.value)
      .filter(term => term.length > 2)
      .debounceTime(400)
      .distinctUntilChanged()
      .flatMap(this._spotifyService.searchArtists);

    var subscription = keyups.subscribe(result => console.log(result));
    // To unsubscribe from notifications:
    // subscription.unsubscribe();

    // var debounced = _.debounce(text => {
    //   var url = `https://api.spotify.com/v1/search?type=artist&q=${text}`;
    //   $.getJSON(url, artists => {
    //     console.log(artists);
    //   });
    // }, 400);
    //
    // $("#search").keyup(e => {
    //   var text = e.target.value;
    //   if (text.length < 3) return;
    //   debounced(text);
    // });
  }
}
