System.register(['rxjs/Rx'], function(exports_1) {
    var Rx_1;
    var SpotifyService;
    return {
        setters:[
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            SpotifyService = (function () {
                function SpotifyService() {
                }
                SpotifyService.prototype.searchArtists = function (searchTerm) {
                    var url = "https://api.spotify.com/v1/search?type=artist&q=" + searchTerm;
                    var promise = $.getJSON(url);
                    return Rx_1.Observable.fromPromise(promise);
                };
                return SpotifyService;
            })();
            exports_1("SpotifyService", SpotifyService);
        }
    }
});
//# sourceMappingURL=spotify.service.js.map