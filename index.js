var videos =[];





$.when(Youtube.getLastVideos()).then (function (resault) {
    videos=resault.items;

        renderVideos(videos);


});

function renderVideos (videos) {
    videos.forEach(function(data, index){
    console.log(data);
var video = '<div class="col-sm-6 col-md-4">'+
            '<div class="thumbnail">'+
            '<img src="' + data.snippet.thumbnails.high.url + '" alt="...">'+
            '<div class="caption">'+
                 '<h3>' + data.snippet.title + '</h3>'+
                 '<h3>' + data.snippet.channelTitle + '</h3>'+
                 '<h3>' + data.snippet.publishedAt + '</h3>'+
            '<p>' + data.snippet.description + '</p>'+
            '<p><a href="#" class="btn btn-primary" role="button">Button</a>'+
               '<a href="#" class="btn btn-default" role="button">Button</a></p>'+
            '</div>'+
            '</div>'+
            '</div>';



    $('#last .row').append(video);
})
}

//добавить автора и дату и 25 видео и колесико загрузки
