// js/i18n.js
import { translations } from './translations.js';
import { handleRouting } from './router.js';

export const availableLanguages = {
    ru: { name: 'Русский', flag: 'ru' },
    en: { name: 'English', flag: 'en' },
    jp: { name: '日本語', flag: 'jp' },
};

const langDropdown = () => document.getElementById('lang-dropdown');
const langButtonText = () => document.getElementById('lang-text');
const langButtonFlag = () => document.getElementById('lang-flag');

export function setLanguage(lang) {
    if (!translations[lang]) return;
    localStorage.setItem('userLanguage', lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        } else {
            element.innerHTML = '';
        }
    });

    document.title = translations[lang].page_title || document.title;
    const flagNode = langButtonFlag();
    const textNode = langButtonText();
    if (flagNode) flagNode.textContent = availableLanguages[lang].flag;
    if (textNode) textNode.textContent = lang.toUpperCase();

    // После смены языка обновляем роутинг/рендер
    handleRouting();
}

export function initLanguageSwitcher() {
    const dd = langDropdown();
    if (!dd) return;
    dd.innerHTML = '';
    for (const langCode in availableLanguages) {
        const langData = availableLanguages[langCode];
        const item = document.createElement('div');
        item.className = 'dropdown-item';
        item.innerHTML = `<span class="text-xl mr-3">${langData.flag}</span> <span>${langData.name}</span>`;
        item.onclick = () => setLanguage(langCode);
        dd.appendChild(item);
    }

    const savedLang = localStorage.getItem('userLanguage');
    const browserLang = (navigator.language || 'en').split('-')[0];
    const init = savedLang || (translations[browserLang] ? browserLang : 'en');
    setLanguage(init);
}


