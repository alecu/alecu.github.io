// Full-screen viewer for images wrapped in <a data-lightbox="group" href="full-size.jpg">.
// Without JavaScript the links simply open the full-size image.
(function () {
    var links = Array.prototype.slice.call(document.querySelectorAll('a[data-lightbox]'));
    if (!links.length || !window.HTMLDialogElement) return;

    var labels = document.documentElement.lang === 'es'
        ? { close: 'Cerrar', prev: 'Página anterior', next: 'Página siguiente' }
        : { close: 'Close', prev: 'Previous', next: 'Next' };

    var dialog = document.createElement('dialog');
    dialog.className = 'lightbox';
    dialog.innerHTML =
        '<div class="lightbox__stage"><img class="lightbox__img" alt=""></div>' +
        '<button type="button" class="lightbox__btn lightbox__close" aria-label="' + labels.close + '">&times;</button>' +
        '<button type="button" class="lightbox__btn lightbox__prev" aria-label="' + labels.prev + '">&lsaquo;</button>' +
        '<button type="button" class="lightbox__btn lightbox__next" aria-label="' + labels.next + '">&rsaquo;</button>';
    document.body.appendChild(dialog);

    var stage = dialog.querySelector('.lightbox__stage');
    var image = dialog.querySelector('.lightbox__img');
    var group = [];
    var index = 0;

    function show(i) {
        index = (i + group.length) % group.length;
        var link = group[index];
        var thumb = link.querySelector('img');
        image.classList.remove('is-zoomed');
        image.src = link.href;
        image.alt = thumb ? thumb.alt : '';
        stage.scrollTo(0, 0);
        dialog.classList.toggle('lightbox--single', group.length < 2);
    }

    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            group = links.filter(function (other) { return other.dataset.lightbox === link.dataset.lightbox; });
            show(group.indexOf(link));
            dialog.showModal();
        });
    });

    image.addEventListener('click', function (event) {
        event.stopPropagation();
        image.classList.toggle('is-zoomed');
    });
    stage.addEventListener('click', function () { dialog.close(); });
    dialog.querySelector('.lightbox__close').addEventListener('click', function () { dialog.close(); });
    dialog.querySelector('.lightbox__prev').addEventListener('click', function () { show(index - 1); });
    dialog.querySelector('.lightbox__next').addEventListener('click', function () { show(index + 1); });
    dialog.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowLeft') show(index - 1);
        if (event.key === 'ArrowRight') show(index + 1);
    });
})();
