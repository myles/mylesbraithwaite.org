function getLatestTrack(user, apiKey) {
    'use strict';

    var url = "http://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=" + user + "&api_key=" + apiKey + "&format=json";

    $.getJSON(url, function (data) {
        var track = data.recenttracks.track[0],
            albumImageURL;

        $(".track").html(track.name);
        $(".artist").html(track.artist['#text']);

        albumImageURL = track.image[3]['#text'];

        $("img").attr({
            'src': albumImageURL,
            'title': track.name + " / " + track.artist['#text']
        });
    });
}

$(document).ready(function () {
    'use strict';

    var user = "mylesb",
        apiKey = "986ccd47b5f8ec7df9b708ff703aa72e";

    getLatestTrack(user, apiKey);

    setInterval(function () {
        getLatestTrack(user, apiKey);
    }, 210000);
});