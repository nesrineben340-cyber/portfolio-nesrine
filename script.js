document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav-links');
    const themeBtn = document.getElementById('theme-toggle');

    // Action au clic sur les barres
    if (burger && nav) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
        });
    }

    // Gestion du mode sombre
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            themeBtn.innerText = document.body.classList.contains('dark-theme') ? "☀️" : "🌙";
        });
    }
});
