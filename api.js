

var key = 'AIzaSyALTCWvsRUOF9yCXf5Er8OPYH-y5a7kPUY';
var maxvideo = 50;

var Youtube = {
    getLastVideos: function(){
        var dfd = jQuery.Deferred();
        $.ajax({
            url: "https://www.googleapis.com/youtube/v3/videos",
            data: {
               part: 'snippet',
                key : key,
                chart: 'mostPopular',
                maxResults: maxvideo
            },
            success: function( result ) {
                dfd.resolve(result);

            }
        });
        return dfd.promise();
    }

};

var youtube_info = {
    getvideodetails: function () {
        var dfd = jQuery.Deferred();
        $.ajax({
            url: "https://www.googleapis.com/youtube/v3/videos",
            data: {
                part: 'snippet,contentDetails,statistics,status',
                key: key,
                id: vid
            },
            success: function( info_result) {
                dfd.resolve(info_result);
            }
        });
        return dfd.promise();
    }
};