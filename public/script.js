// --- Active Link Highlighting on Scroll ---
const sections = document.querySelectorAll('.content-section');
const navLinks = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === entry.target.id) {
                    link.classList.add('active');
                }
            });
        }
    });
}, { threshold: 0.5 });

sections.forEach(section => {
    observer.observe(section);
});

// --- Mobile Menu Toggle ---
const menuToggle = document.getElementById('menu-toggle');
const navLinksContainer = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinksContainer.classList.toggle('open');
});

// Close sidebar when a link is clicked on mobile
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navLinksContainer.classList.contains('open')) {
            navLinksContainer.classList.remove('open');
        }
    });
});
