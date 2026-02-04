// --- MENU BURGER ---
const burger = document.getElementById('burger');
const nav = document.getElementById('nav-links');

burger.addEventListener('click', () => {
    // On ajoute ou retire la classe 'nav-active' pour ouvrir/fermer le menu
    nav.classList.toggle('nav-active');
    
    // Animation du burger (optionnel, pour faire une croix)
    burger.classList.toggle('toggle');
});


// --- ANIMATION D'APPARITION AU SCROLL ---
// On observe les éléments pour les faire apparaître quand on descend
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

// On dit à l'observateur de surveiller nos cartes de projets
const hiddenElements = document.querySelectorAll('.card');
hiddenElements.forEach((el) => observer.observe(el));

const themeBtn = document.getElementById('theme-toggle');
const body = document.body;

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    
    // Change l'icône selon le mode
    if (body.classList.contains('dark-theme')) {
        themeBtn.innerText = "☀️";
    } else {
        themeBtn.innerText = "🌙";
    }
});
// --- ANIMATION DES BARRES DE COMPÉTENCES ---
const skillsSection = document.getElementById('competences');
const progressBars = document.querySelectorAll('.progress');

const showProgress = () => {
    progressBars.forEach(progressBar => {
        // On récupère la valeur cible (ex: 80%) dans le style HTML ou on la définit ici
        const value = progressBar.dataset.progress || "80%"; 
        progressBar.style.width = value;
    });
}

const hideProgress = () => {
    progressBars.forEach(p => p.style.width = "0%");
}

// On utilise l'Observer pour déclencher l'animation au bon moment
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            showProgress();
        } else {
            hideProgress(); // Recommence l'animation si on remonte (optionnel)
        }
    });
}, { threshold: 0.5 }); // Déclenche quand 50% de la section est visible

skillsObserver.observe(skillsSection);
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. GESTION DU MODE SOMBRE ---
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;

    if(themeBtn) {
        themeBtn.addEventListener('click', () => {
            body.classList.toggle('dark-theme');
            themeBtn.innerText = body.classList.contains('dark-theme') ? "☀️" : "🌙";
        });
    }

    // --- 2. MENU BURGER (MOBILE) ---
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('nav-links');

    if(burger) {
        burger.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        });
    }

    // --- 3. ANIMATION DES BARRES DE COMPÉTENCES ---
    const progressBars = document.querySelectorAll('.progress');
    
    const animateSkills = () => {
        progressBars.forEach(bar => {
            const target = bar.getAttribute('data-progress');
            bar.style.width = target;
        });
    };

    // --- 4. ANIMATION DES CARTES AU DÉFILEMENT ---
    const observerOptions = { threshold: 0.2 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                // Si c'est la section compétences, on lance les barres
                if(entry.target.id === 'competences') {
                    animateSkills();
                }
            }
        });
    }, observerOptions);

    // On observe toutes les cartes et la section compétences
    document.querySelectorAll('.card, #competences').forEach(el => {
        observer.observe(el);
    });
});