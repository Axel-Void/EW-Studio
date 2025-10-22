// js/router.js
import { renderProjectList, renderProjectDetail, renderBlogList, renderPostDetail } from './render.js';

const allPagesSelector = '.spa-page';

export function navigateTo(path) {
    location.hash = path;
}

function hideAllPages() {
    document.querySelectorAll(allPagesSelector).forEach(page => {
        page.classList.add('hidden');
        page.classList.remove('is-visible');
    });
}

function showPage(pageId, slug = null) {
    hideAllPages();
    const page = document.getElementById(pageId);
    if (page) {
        page.classList.remove('hidden');
        setTimeout(() => page.classList.add('is-visible'), 50);
        window.scrollTo({ top: 0, behavior: 'smooth' });

        if (pageId === 'project-detail' && slug) renderProjectDetail(slug);
        else if (pageId === 'post-detail' && slug) renderPostDetail(slug);
    }
}

export function handleRouting() {
    let hash = window.location.hash.slice(1) || 'about';
    const parts = hash.split('/');
    const mainRoute = parts[0];
    
    renderProjectList();
    renderBlogList();

    const routes = {
        'hero': 'about', 'about': 'about', 'projects': 'projects-list',
        'blog': 'blog-list', 'contact': 'contact',
        'project': () => showPage('project-detail', parts[1]),
        'post': () => showPage('post-detail', parts[1]),
    };

    const action = routes[mainRoute];
    if (typeof action === 'function') action();
    else if (typeof action === 'string') showPage(action);
    else showPage('about');
}

