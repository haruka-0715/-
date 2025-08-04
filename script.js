function changeVideo(videoSource) {
    const videoPlayer = document.getElementById('video-player');
    videoPlayer.src = videoSource;
    videoPlayer.load();
    videoPlayer.play();
}

window.onload = function() {
    changeVideo('video1.mp4');
};