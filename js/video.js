// Load YouTube videos and embedded emulators only when the visitor asks for them.
document.querySelectorAll('[data-youtube], [data-embed]').forEach(function (button) {
    button.addEventListener('click', function () {
        var frame = document.createElement('iframe');
        if (button.dataset.youtube) {
            frame.src = 'https://www.youtube-nocookie.com/embed/' + button.dataset.youtube + '?autoplay=1&rel=0';
            frame.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
        } else {
            frame.src = button.dataset.embed;
            frame.allow = 'autoplay; fullscreen; gamepad';
            frame.scrolling = 'no';
        }
        frame.title = button.getAttribute('aria-label').replace('Play ', '');
        button.replaceWith(frame);
    });
});
