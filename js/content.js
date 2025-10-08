// js/content.js
export const projectSlugs = ['project-atlas', 'wip-1', 'wip-2'];
export const postSlugs = ['post-1', 'post-2', 'post-3'];

export function getStaticProjectImage(slug) {
    if (slug === 'project-atlas') return 'https://placehold.co/600x300/6b21a8/ffffff?text=Project+Atlas+2D';
    return 'https://placehold.co/600x300/111827/ffffff?text=WIP';
}

export function getStaticPostImage(slug) {
    if (slug === 'post-1') return 'https://placehold.co/600x300/334155/ffffff?text=Godot';
    if (slug === 'post-2') return 'https://placehold.co/600x300/334155/ffffff?text=Animation';
    return 'https://placehold.co/600x300/334155/ffffff?text=Gamedev';
}
