/// <reference path="../typings/tsd.d.ts" />

import { Component, OnInit } from 'angular2/core';

import { Observable } from 'rxjs/Rx';

import { SpotifyService } from './services/spotify.service';

import { GithubProfileComponent } from './github.component';
import { PostComponent } from './post.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/main.template.html',
    directives: [GithubProfileComponent, PostComponent],
    providers: [SpotifyService]
})
export class AppComponent implements OnInit {

  constructor(private _spotifyService: SpotifyService) {  }

  ngOnInit() {
    this.initSearchInput();
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
