
document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("my-video");

    video.addEventListener("click", function() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
});


