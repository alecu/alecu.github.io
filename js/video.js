// Load YouTube only when a video is played.
document.querySelectorAll('[data-youtube]').forEach(function (button) {
    button.addEventListener('click', function () {
        var frame = document.createElement('iframe');
        frame.src = 'https://www.youtube-nocookie.com/embed/' + button.dataset.youtube + '?autoplay=1&rel=0';
        frame.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
        frame.title = button.getAttribute('aria-label').replace('Play ', '');
        button.replaceWith(frame);
    });
});
