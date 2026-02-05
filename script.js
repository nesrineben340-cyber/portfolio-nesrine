document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav-links');
    const themeBtn = document.getElementById('theme-toggle');

    // Toggle Menu
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });

    // Toggle Dark Mode
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        themeBtn.innerText = document.body.classList.contains('dark-theme') ? "☀️" : "🌙";
    });

    // Animation Skills
    const progressBars = document.querySelectorAll('.progress');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                progressBars.forEach(bar => {
                    bar.style.width = bar.getAttribute('data-progress');
                });
            }
        });
    }, { threshold: 0.5 });

    const skillsSection = document.getElementById('competences');
    if (skillsSection) observer.observe(skillsSection);
});
