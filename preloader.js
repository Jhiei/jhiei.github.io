$(() => {
    let modal = $(".preloader-modal");
    let btn = $(".preloader-modal-hide-btn");

    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'assets/as_you_are_zt.mp3');

    btn.on("click", function() {
        audioElement.play();

        gsap.to(modal, {
            duration: 5,
            y: '100%',
            ease: 'power2'
       });
    })
});