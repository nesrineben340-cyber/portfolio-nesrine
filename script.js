document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav-links');
    const themeBtn = document.getElementById('theme-toggle');

    // Menu Burger
    if (burger && nav) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
        });
    }

    // Mode Sombre
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            themeBtn.innerText = document.body.classList.contains('dark-theme') ? "☀️" : "🌙";
        });
    }

    // Animation des barres de compétences au scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('.progress');
                progressBars.forEach(bar => {
                    bar.style.width = bar.getAttribute('data-progress');
                });
            }
        });
    }, { threshold: 0.5 });

    const compSection = document.getElementById('competences');
    if (compSection) observer.observe(compSection);
});
