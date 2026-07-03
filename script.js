const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('main-nav');
const header = document.querySelector('.main-header');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
});

nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
    });
});

// Newsletter popup
const newsletterForm = document.querySelector('.newsletter form');
const popup = document.getElementById('newsletter-popup');
const popupClose = document.getElementById('newsletter-popup-close');

if (newsletterForm && popup) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const data = new FormData(newsletterForm);
        newsletterForm.reset();
        popup.classList.add('open');
        fetch(newsletterForm.action, {
            method: 'POST',
            body: data,
            headers: { 'Accept': 'application/json' }
        });
    });
}

if (popupClose) {
    popupClose.addEventListener('click', function() {
        popup.classList.remove('open');
    });
}

if (popup) {
    popup.addEventListener('click', function(e) {
        if (e.target === popup) popup.classList.remove('open');
    });
}

