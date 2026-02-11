// Splash hide (always works)
window.addEventListener('load', () => {
    const splash = document.getElementById('splash');
    setTimeout(() => {
        splash.style.opacity = '0';
        setTimeout(() => splash.style.display = 'none', 600);
    }, 2200);
});

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

// Typing
new Typed('#typed-profile', {
    strings: ['19-year-old ambitious undergraduate at the Informatics Institute of Technology (IIT), pursuing studies in technology since 2023. Early university entrant with a strong foundation in Python programming, Java and web development. Certified in Quantum Computing, Transformer-based NLP, Artificial Intelligence, Cloud Computing (Microsoft Azure), AI Prompt Engineering (DeepLearning.AI), ChatGPT for Developers, and Zero Trust Frameworks. Creative problem-solver blending leadership, adaptability, and a passion for emerging technologies.'],
    typeSpeed: 35,
    cursorChar: '_',
    loop: false
});

// Radar
new Chart(document.getElementById('skills-radar'), {
    type: 'radar',
    data: {
        labels: ['Creativity', 'Team Building', 'Communication', 'Problem Solving', 'Leadership', 'Critical Thinking', 'Time Management'],
        datasets: [{
            label: 'Level',
            data: [9, 8, 9, 9, 8, 9, 8],
            backgroundColor: 'rgba(0,255,65,0.15)',
            borderColor: '#00ff41',
            pointBackgroundColor: '#00ff41'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            r: { beginAtZero: true, max: 10, grid: { color: '#30363d' } }
        }
    }
});

// Modal
const modals = {
    muc: { title: 'MUC Digital', desc: 'SDGP | Sept 2025 – Present\nLeading development of full digital municipal platform for Maharagama Urban Council...' },
    wavelink: { title: 'WaveLink', desc: 'UOW | Sept 2024 – Dec 2024\nGamified beach cleanup & conservation app...' },
    climate: { title: 'Climate Changers', desc: 'UOW | Feb 2025 – Jun 2025\nInteractive web app with Chart.js visualizations...' },
    traffic: { title: 'Traffic Analyzer', desc: 'UOW | Sept 2024 – Dec 2024\nPython tool for traffic flow analysis...' },
    construct: { title: 'Construct Connect', desc: 'IIT | Jan 2023 – March 2024\nFigma-based talent platform concept for construction...' }
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

AOS.init({ duration: 800, once: true });