$(() => {
    let modal = $(".preloader-modal");
    let btn = $(".preloader-modal-hide-btn");
    let audio = $("#audioplayer");

    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'assets/pursue-roy-antonio.mp3');

    btn.on("click", function() {
        audioElement.play();

        modal.fadeOut(500);
    })
});