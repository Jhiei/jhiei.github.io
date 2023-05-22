$(() => {
    let btn = $('.landing-btn');
    let text = $('.landing-text');

    let count = 0;
    let container = $('.text-container');
    let prev = $('.prev-btn');
    let next = $('.next-btn');

    btn.on('click', function() {
        text.slideToggle(1500);

        container.eq(count).delay(1500).slideToggle(1500);
    });

    next.on('click', function() {
        container.eq(count).slideToggle(1500);

        count += 1;

        container.eq(count).delay(1500).slideToggle(1500);
    })

    prev.on('click', function() {
        container.eq(count).slideToggle(1500);

        count -= 1;

        container.eq(count).delay(1500).slideToggle(1500);
    })
})