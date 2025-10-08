// js/main.js
import { initLanguageSwitcher } from './i18n.js';
import { handleRouting } from './router.js';
import { renderProjectList, renderBlogList } from './render.js';
import { initCanvas } from './canvas.js';

document.addEventListener('DOMContentLoaded', () => {
    // language
    initLanguageSwitcher();

    // routing & render initial
    handleRouting();
    window.addEventListener('hashchange', handleRouting);

    // init canvas animation
    initCanvas();

    // observe fade-in sections
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in-section:not(.is-visible)').forEach(s => observer.observe(s));
    window.addEventListener('hashchange', () => {
        document.querySelectorAll('.fade-in-section:not(.is-visible)').forEach(s => observer.observe(s));
    });

    // mobile menu toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const menuIconOpen = document.getElementById('menu-icon-open');
    const menuIconClose = document.getElementById('menu-icon-close');
    const menuItems = document.querySelectorAll('[data-menu-item]');

    function toggleMobileMenu() {
        if (!mobileMenu) return;
        const isHidden = mobileMenu.classList.contains('hidden');
        mobileMenu.classList.toggle('hidden');
        if (menuIconOpen) menuIconOpen.classList.toggle('hidden', !isHidden);
        if (menuIconClose) menuIconClose.classList.toggle('hidden', isHidden);
    }
    if (menuToggle) menuToggle.addEventListener('click', toggleMobileMenu);
    menuItems.forEach(item => item.addEventListener('click', toggleMobileMenu));

    // simple form submit handler (demo)
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // лёгкий UX - просто сброс формы и сообщение в консоль
            alert('Форма отправлена (демо).');
            contactForm.reset();
        });
    }
});
