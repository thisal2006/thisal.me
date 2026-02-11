// Matrix Rain
const canvas = document.getElementById('matrix-rain');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?/`~'.split('');
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0f0';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(draw, 35);

window.addEventListener('resize', () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
});

// Splash hide
window.addEventListener('load', () => {
    const splash = document.getElementById('splash');
    splash.style.opacity = '0';
    setTimeout(() => { splash.style.display = 'none'; }, 500);
});

// Typing effect
new Typed('#typed-profile', {
    strings: [
        '19-year-old ambitious undergraduate at the Informatics Institute of Technology (IIT), pursuing studies in technology since 2023. Early university entrant with a strong foundation in Python programming, Java and web development. Certified in Quantum Computing, Transformer-based NLP, Artificial Intelligence, Cloud Computing (Microsoft Azure), AI Prompt Engineering (DeepLearning.AI), ChatGPT for Developers, and Zero Trust Frameworks. Creative problem-solver blending leadership, adaptability, and a passion for emerging technologies.'
    ],
    typeSpeed: 40,
    loop: false,
    cursorChar: '_'
});

// Skills Radar
new Chart(document.getElementById('skillsRadar'), {
    type: 'radar',
    data: {
        labels: ['Creativity', 'Team Building', 'Communication', 'Problem Solving', 'Leadership', 'Critical Thinking', 'Time Management'],
        datasets: [{
            label: 'Level',
            data: [9, 8, 9, 9, 8, 9, 8],
            backgroundColor: 'rgba(0, 255, 159, 0.15)',
            borderColor: '#00ff9f',
            pointBackgroundColor: '#00ff9f'
        }]
    },
    options: {
        scales: {
            r: {
                beginAtZero: true,
                max: 10,
                grid: { color: '#0f03' },
                pointLabels: { font: { size: 12 } }
            }
        },
        responsive: true,
        maintainAspectRatio: false
    }
});

// Project Modals (full descriptions from CV)
const modals = {
    muc: {
        title: 'MUC Digital - Smart Municipal Services Platform',
        description: 'Leading the development of a comprehensive web and mobile platform to fully digitalize Maharagama Urban Council services. Features real-time GPS-enabled garbage truck tracking with citizen notifications, online booking for public properties/vehicles and cemetery slots with integrated payments, one-tap emergency access, push announcements, and an AI chatbot. Built using Flutter/React, Node.js, Firebase (real-time & FCM), Google Maps API, and PayHere gateway to improve efficiency, transparency, and citizen satisfaction.',
        link: '#'
    },
    wavelink: {
        title: 'WaveLink Mobile App',
        description: 'Gamified ocean conservation platform that turns beach cleanups and marine protection into daily missions with rewards, progress tracking, and social features. Focused on solving plastic waste, low youth engagement, and lack of measurable impact in traditional environmental initiatives.',
        link: '#'
    },
    climate: {
        title: 'Climate Changers - Interactive Climate Awareness Web App',
        description: 'Designed and developed a fully responsive educational web application to raise climate change awareness. Built interactive data visualizations of global temperature rise and CO₂ emissions using Chart.js, integrated sustainable living tips through dynamic modals, and implemented smooth animations and mobile-first design with HTML, CSS (media queries), and vanilla JavaScript.',
        link: '#'
    },
    traffic: {
        title: 'Traffic Insights and Visualization for Local Governance Planning',
        description: 'Developed Python software for analyzing traffic flow data from Elm Avenue/Rabbit Road and Hanley Highway/Westway—two major intersections under local council authority. The app simplifies CSV file selection and analysis, offering detailed insights into vehicle types, traffic patterns, and weather conditions.',
        link: '#'
    },
    construct: {
        title: 'Designing Construct Connect: A Talent Platform for Construction',
        description: 'In-depth research on talent acquisition in the construction industry, leading to the conceptual design of Construct Connect—a platform bridging job seekers, recruiters, and professionals. Using Figma, crafted an intuitive frontend UI focused on seamless matching and networking.',
        link: '#'
    }
};

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const id = card.dataset.modal;
        const content = modals[id];
        document.getElementById('modal-body').innerHTML = `
            <h2>${content.title}</h2>
            <pre><code>${content.description}</code></pre>
            <a href="${content.link}" target="_blank">View Project</a>
        `;
        document.getElementById('modal').style.display = 'flex';
    });
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

// Confetti on resume download
document.getElementById('resume-download').addEventListener('click', () => {
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
});

// Form submission alert
document.getElementById('contact-form').addEventListener('submit', function(e) {
    // No preventDefault to allow real submit
    setTimeout(() => {
        alert('Message sent successfully!');
    }, 100);
});

AOS.init({ duration: 1000 });
VanillaTilt.init(document.querySelectorAll("[data-tilt]"), { max: 25, speed: 400 });