import { Observable } from 'rxjs/Rx';

export class SpotifyService {
  
  searchArtists(searchTerm: string) {
    var url = `https://api.spotify.com/v1/search?type=artist&q=${searchTerm}`;
    var promise = $.getJSON(url);
    return Observable.fromPromise(promise);
  }
}
