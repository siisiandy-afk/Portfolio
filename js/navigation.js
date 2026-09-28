// Andy Gaisie Portfolio - Dynamic Navigation & Active State
document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname.toLowerCase();
    const navLinks = document.querySelectorAll('.nav-menu .nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href').toLowerCase();
        
        // Match home
        if ((currentPath.endsWith('/') || currentPath.endsWith('index.html')) && (href === 'index.html' || href === '#' || href === '/')) {
            link.classList.add('active');
        } 
        // Match work
        else if (currentPath.includes('work.html') && href.includes('work.html')) {
            link.classList.add('active');
        } 
        // Match about
        else if (currentPath.includes('about.html') && href.includes('about.html')) {
            link.classList.add('active');
        } 
        // Match journal
        else if (currentPath.includes('journal') && href.includes('journal')) {
            link.classList.add('active');
        } 
        // Match contact
        else if (currentPath.includes('contact.html') && href.includes('contact.html')) {
            link.classList.add('active');
        }
    });
});
