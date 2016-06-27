/// <reference path="../typings/tsd.d.ts" />

import { Component, OnInit } from 'angular2/core';

import { HTTP_PROVIDERS } from 'angular2/http';
import { Observable } from 'rxjs/Rx';

import { PostService } from './services/post.service';
import { SpotifyService } from './services/spotify.service';


@Component({
    selector: 'my-app',
    template: `
        <input id="search" type="text" class="form-control" placeholder="Search for artists...">
    `,
    providers: [SpotifyService, PostService, HTTP_PROVIDERS]
})
export class AppComponent implements OnInit {

  ngOnInit() {
    this.getPostsFromService();
    this.initSearchInput();
  }

  getPostsFromService() {
    this._postService.getPosts()
      .subscribe(posts => console.log(posts));
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

  constructor(
    private _spotifyService: SpotifyService,
    private _postService: PostService) { }
}
