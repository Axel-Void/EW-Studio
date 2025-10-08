// js/render.js
import { translations } from './translations.js';
import { projectSlugs, postSlugs, getStaticProjectImage, getStaticPostImage } from './content.js';

export function getProjectData(lang, slug) {
    const t = translations[lang];
    if (slug === 'project-atlas') {
        return {
            slug: 'project-atlas',
            title: t.project_atlas_title,
            subtitle: t.project_atlas_subtitle,
            image: getStaticProjectImage(slug),
            description: t.project_atlas_desc,
            tags: t.project_atlas_tags,
            details: {
                lore_title: t.project_atlas_lore_title,
                lore: t.project_atlas_lore,
                challenges_title: t.project_atlas_challenges_title,
                challenges: t.project_atlas_challenges
            }
        };
    } else {
        return {
            slug,
            isWip: true,
            title: t.project_wip_title,
            subtitle: t.project_wip_subtitle,
            image: getStaticProjectImage(slug),
            description: t.project_wip_desc,
            tags: t.project_wip_tags
        };
    }
}

export function renderProjectList() {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;
    const lang = document.documentElement.lang || 'ru';

    grid.innerHTML = projectSlugs.map(slug => {
        const p = getProjectData(lang, slug);
        const cardClass = p.isWip ? 'card rounded-xl overflow-hidden shadow-lg flex flex-col opacity-60' : 'card rounded-xl overflow-hidden shadow-lg flex flex-col';
        const titleClass = p.slug === 'project-atlas' ? 'text-red-400' : 'text-cyan-200';
        const clickAction = p.isWip ? '' : `onclick="location.hash='project/${p.slug}'"`;

        return `
            <div class="${cardClass}" ${clickAction}>
                <img src="${p.image}" alt="Обложка проекта" class="w-full h-48 object-cover border-b border-gray-700">
                <div class="p-6 flex-grow flex flex-col">
                    <h3 class="text-xl font-bold mb-3 ${titleClass}">${p.title}</h3>
                    <p class="text-gray-400 mb-4 flex-grow">${p.description}</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${p.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    ${!p.isWip ? `<a href="#project/${p.slug}" class="btn-primary py-2 px-4 rounded-lg text-center mt-auto">${translations[lang].btn_view_details}</a>` : ''}
                </div>
            </div>`;
    }).join('');
}

export function renderProjectDetail(slug) {
    const container = document.getElementById('project-detail');
    if (!container) return;
    const lang = document.documentElement.lang || 'ru';
    const t = translations[lang];
    const project = getProjectData(lang, slug);

    if (!project) {
        container.innerHTML = `<h2 class="text-4xl text-red-500 text-center">Project not found</h2>`;
        return;
    }

    const linksHtml = slug === 'project-atlas' ? `
        <div class="inline-flex items-center justify-center font-bold py-3 px-6 rounded-full shadow-lg bg-gray-700 text-gray-400 cursor-not-allowed">
            ${t.btn_steam_page} (${t.status_soon})
        </div>
        <div class="inline-flex items-center justify-center font-bold py-3 px-6 rounded-full shadow-lg bg-gray-700 text-gray-400 cursor-not-allowed">
            ${t.btn_playmarket_page} (${t.status_soon})
        </div>` : '';

    container.innerHTML = `
        <div class="max-w-4xl mx-auto">
            <a href="#projects" class="text-cyan-400 hover:text-cyan-300 mb-6 inline-flex items-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                ${t.btn_back_to_projects}
            </a>
            <img src="${project.image}" alt="${project.title}" class="w-full rounded-xl mb-8 shadow-2xl border border-gray-700 aspect-video object-cover">
            <h1 class="text-4xl md:text-5xl font-orbitron mb-2 ${project.slug === 'project-atlas' ? 'text-red-400' : 'studio-logo'}">${project.title}</h1>
            <p class="text-xl text-gray-400 mb-4">${project.subtitle}</p>
            <div class="flex flex-wrap gap-2 mb-8">${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
            <div class="flex gap-4 flex-wrap mb-10">${linksHtml}</div>
            <div class="space-y-12">
                <div class="p-6 bg-gray-900 rounded-xl border border-gray-700">
                    <h3 class="text-3xl font-bold text-cyan-400 mb-4">${project.details.lore_title}</h3>
                    <div class="text-lg text-gray-300 leading-relaxed">${project.details.lore}</div>
                </div>
                <div class="p-6 bg-gray-900 rounded-xl border border-gray-700">
                    <h3 class="text-3xl font-bold text-cyan-400 mb-4">${project.details.challenges_title}</h3>
                    <ul class="list-disc list-inside text-gray-400 space-y-3 pl-4">${project.details.challenges.map(c => `<li>${c}</li>`).join('')}</ul>
                </div>
            </div>
        </div>`;
}

export function getPostData(lang, slug) {
    const t = translations[lang];
    const posts = {
        'post-1': { slug: 'post-1', title: t.post1_title, date: t.post1_date, summary: t.post1_summary, content: t.post1_content, image: getStaticPostImage('post-1') },
        'post-2': { slug: 'post-2', title: t.post2_title, date: t.post2_date, summary: t.post2_summary, content: t.post2_content, image: getStaticPostImage('post-2') },
        'post-3': { slug: 'post-3', title: t.post3_title, date: t.post3_date, summary: t.post3_summary, content: t.post3_content, image: getStaticPostImage('post-3') }
    };
    return posts[slug];
}

function getStaticPostImage(slug) {
    if (slug === 'post-1') return 'https://placehold.co/600x300/334155/ffffff?text=Godot';
    if (slug === 'post-2') return 'https://placehold.co/600x300/334155/ffffff?text=Animation';
    return 'https://placehold.co/600x300/334155/ffffff?text=Gamedev';
}

export function renderBlogList() {
    const grid = document.getElementById('blog-grid');
    if (!grid) return;
    const lang = document.documentElement.lang || 'ru';

    const postSlugs = ['post-1','post-2','post-3'];
    grid.innerHTML = postSlugs.map(slug => {
        const post = getPostData(lang, slug);
        return `
            <div class="card rounded-xl overflow-hidden shadow-lg flex flex-col" onclick="location.hash='post/${post.slug}'">
                <img src="${post.image}" alt="Обложка поста" class="w-full h-48 object-cover border-b border-gray-700">
                <div class="p-6 flex-grow flex flex-col">
                    <p class="text-sm text-gray-500 mb-2">${post.date}</p>
                    <h3 class="text-xl font-bold mb-3 text-cyan-200">${post.title}</h3>
                    <p class="text-gray-400 mb-4 flex-grow">${post.summary}</p>
                    <a href="#post/${post.slug}" class="text-cyan-400 hover:text-cyan-300 font-semibold mt-auto">${translations[lang].btn_read_more}</a>
                </div>
            </div>`;
    }).join('');
}

export function renderPostDetail(slug) {
    const container = document.getElementById('post-detail');
    if (!container) return;
    const lang = document.documentElement.lang || 'ru';
    const t = translations[lang];
    const post = getPostData(lang, slug);

    if (!post) {
        container.innerHTML = `<h2 class="text-4xl text-red-500 text-center">Post not found</h2>`;
        return;
    }

    container.innerHTML = `
        <div class="max-w-3xl mx-auto">
            <a href="#blog" class="text-cyan-400 hover:text-cyan-300 mb-6 inline-flex items-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                ${t.btn_back_to_blog}
            </a>
            <p class="text-sm text-gray-500 mb-2">${post.date}</p>
            <h1 class="text-4xl md:text-5xl font-orbitron mb-6 text-white">${post.title}</h1>
            <img src="${post.image}" alt="${post.title}" class="w-full rounded-xl mb-8 shadow-xl border border-gray-700 aspect-video object-cover">
            <div class="prose max-w-none">${post.content}</div>
        </div>`;
}
