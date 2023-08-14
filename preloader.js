$(() => {
    let modal = $(".preloader-modal");
    let btn = $(".preloader-modal-hide-btn");

    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'assets/pursue-roy-antonio.mp3');

    btn.on("click", function() {
        audioElement.play();

        gsap.to(modal, {
            duration: 5,
            y: '100%',
            ease: 'power2'
       });
    })
});