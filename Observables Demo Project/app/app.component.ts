/// <reference path="../typings/tsd.d.ts" />

import { Component } from 'angular2/core';
import { Observable } from 'rxjs/Rx';

import { SpotifyService } from './spotify.service';

@Component({
    selector: 'my-app',
    template: `
        <input id="search" type="text" class="form-control" placeholder="Search for artists...">
    `,
    providers: [SpotifyService]
})
export class AppComponent {

    constructor(spotifyService: SpotifyService) {

      var keyups = Observable.fromEvent($("#search"), "keyup")
        .map(event => event.target.value)
        .filter(term => term.length > 2)
        .debounceTime(400)
        .distinctUntilChanged()
        .flatMap(spotifyService.searchArtists);

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
