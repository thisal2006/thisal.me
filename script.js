// Theme toggle + persist
const toggle = document.getElementById('theme-toggle');
const body = document.body;
const currentTheme = localStorage.getItem('theme') || 'dark';
body.setAttribute('data-theme', currentTheme);
toggle.innerHTML = currentTheme === 'dark' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';

toggle.addEventListener('click', () => {
    const newTheme = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    toggle.innerHTML = newTheme === 'dark' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
});

// Typing
new Typed('#typed', {
    strings: ['19-year-old ambitious undergraduate at the Informatics Institute of Technology (IIT), pursuing studies in technology since 2023. Early university entrant with a strong foundation in Python programming, Java and web development. Certified in Quantum Computing, Transformer-based NLP, Artificial Intelligence, Cloud Computing (Microsoft Azure), AI Prompt Engineering (DeepLearning.AI), ChatGPT for Developers, and Zero Trust Frameworks. Creative problem-solver blending leadership, adaptability, and a passion for emerging technologies.'],
    typeSpeed: 40,
    loop: false
});

// Radar
new Chart(document.getElementById('radar'), {
    type: 'radar',
    data: {
        labels: ['Creativity', 'Team Building', 'Communication', 'Problem Solving', 'Leadership', 'Critical Thinking', 'Time Management'],
        datasets: [{
            label: 'Level',
            data: [9, 8, 9, 9, 8, 9, 8],
            backgroundColor: 'rgba(88, 166, 255, 0.15)',
            borderColor: '#58a6ff',
            pointBackgroundColor: '#58a6ff'
        }]
    },
    options: { responsive: true, maintainAspectRatio: false }
});

// Modal
const modals = {
    muc: { title: 'MUC Digital', desc: 'Leading SDGP project... full description here from CV' },
    // fill all
};

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const id = card.dataset.modal;
        document.getElementById('modal-title').textContent = modals[id].title;
        document.getElementById('modal-desc').textContent = modals[id].desc;
        document.getElementById('modal').style.display = 'flex';
    });
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

// Splash hide
window.addEventListener('load', () => {
    const splash = document.getElementById('splash');
    splash.style.opacity = '0';
    setTimeout(() => splash.style.display = 'none', 600);
});

AOS.init({ duration: 800 });