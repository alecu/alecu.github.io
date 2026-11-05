// The emulator page has a fixed size. Render it at that size, then scale it down to fit the column.
function fitEmulator(frame, box, width, height) {
    frame.style.width = width + 'px';
    frame.style.height = height + 'px';
    frame.style.transformOrigin = '0 0';
    box.classList.add('is-playing');
    var fit = function () { frame.style.transform = 'scale(' + (box.clientWidth / width) + ')'; };
    fit();
    if (window.ResizeObserver) new ResizeObserver(fit).observe(box);
    else window.addEventListener('resize', fit);
}

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
            // Give the emulator the keyboard, so the arrow keys play instead of scrolling the page.
            frame.addEventListener('load', function () { frame.focus(); });
            fitEmulator(frame, button.parentNode, Number(button.dataset.embedWidth), Number(button.dataset.embedHeight));
        }
        frame.title = button.getAttribute('aria-label').replace('Play ', '');
        button.replaceWith(frame);
    });
});
