// Splash screen – always hide after 2.5s even if JS errors
setTimeout(() => {
    const splash = document.getElementById('splash');
    if (splash) {
        splash.style.opacity = '0';
        setTimeout(() => splash.style.display = 'none', 600);
    }
}, 2500);

// Theme toggle
const toggle = document.getElementById('theme-toggle');
const body = document.body;
let theme = localStorage.getItem('theme') || 'dark';
body.setAttribute('data-theme', theme);
toggle.innerHTML = theme === 'dark' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';

toggle.addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    toggle.innerHTML = theme === 'dark' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
});

VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.3
});

// Modal for projects
const modals = {
    muc: { title: 'MUC Digital', desc: 'SDGP | Sept 2025 – Present\nLeading development of full digital municipal platform...' },
    wavelink: { title: 'WaveLink', desc: 'UOW | Sept 2024 – Dec 2024\nGamified beach cleanup & conservation app...' },
    climate: { title: 'Climate Changers', desc: 'UOW | Feb 2025 – Jun 2025\nInteractive web app with Chart.js visualizations...' },
    traffic: { title: 'Traffic Analyzer', desc: 'UOW | Sept 2024 – Dec 2024\nPython tool for traffic flow analysis...' },
    construct: { title: 'Construct Connect', desc: 'IIT | Jan 2023 – March 2024\nFigma-based talent platform concept...' }
};

document.querySelectorAll('.project').forEach(card => {
    card.addEventListener('click', () => {
        const id = card.dataset.project;
        document.getElementById('modal-title').textContent = modals[id].title;
        document.getElementById('modal-desc').textContent = modals[id].desc;
        document.getElementById('modal').style.display = 'flex';
    });
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});