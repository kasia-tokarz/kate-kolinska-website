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

if (newsletterForm) {
    newsletterForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const data = new FormData(newsletterForm);
        try {
            const res = await fetch(newsletterForm.action, {
                method: 'POST',
                body: data,
                headers: { 'Accept': 'application/json' }
            });
            if (res.ok) {
                newsletterForm.reset();
                popup.classList.add('open');
            }
        } catch (_) {}
    });
}

if (popupClose) {
    popupClose.addEventListener('click', () => popup.classList.remove('open'));
}

if (popup) {
    popup.addEventListener('click', (e) => {
        if (e.target === popup) popup.classList.remove('open');
    });
}

