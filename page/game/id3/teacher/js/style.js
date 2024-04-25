document.addEventListener("DOMContentLoaded", function() {
    var iframe = document.getElementById('fullscreenIframe');

    // Listen for iframe load event
    iframe.addEventListener('load', function() {
        // Request fullscreen
        if (iframe.requestFullscreen) {
            iframe.requestFullscreen();
        } else if (iframe.mozRequestFullScreen) { /* Firefox */
            iframe.mozRequestFullScreen();
        } else if (iframe.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            iframe.webkitRequestFullscreen();
        } else if (iframe.msRequestFullscreen) { /* IE/Edge */
            iframe.msRequestFullscreen();
        }
    });
});
