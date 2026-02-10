const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggle.innerHTML = document.body.classList.contains('dark-mode') ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Typing Effect (faster for engagement)
const typed = new Typed('#typed-profile', {
    strings: ['19-year-old ambitious undergraduate at the Informatics Institute of Technology (IIT), pursuing studies in technology since 2023. Early university entrant with a strong foundation in Python programming, Java and web development. Certified in Quantum Computing, Transformer-based NLP, Artificial Intelligence, Cloud Computing (Microsoft Azure), AI Prompt Engineering (DeepLearning.AI), ChatGPT for Developers, and Zero Trust Frameworks. Creative problem-solver blending leadership, adaptability, and a passion for emerging technologies.'],
    typeSpeed: 50,
    loop: false
});

// Skills Radar Chart
const ctx = document.getElementById('skillsRadar').getContext('2d');
const radarChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['Creativity', 'Team Building', 'Communication', 'Problem Solving', 'Leadership', 'Critical Thinking', 'Time Management'],
        datasets: [{
            label: 'Personal Skills Level',
            data: [8, 7, 9, 9, 8, 8, 7],
            backgroundColor: 'rgba(0, 123, 255, 0.2)',
            borderColor: '#007BFF',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            r: {
                beginAtZero: true,
                max: 10
            }
        }
    }
});

// Project Modals
const modals = {
    muc: {
        title: 'MUC Digital - Smart Municipal Services Platform',
        description: 'SDGP | Sept 2025 - Present. Leading the development of a comprehensive web and mobile platform to fully digitalize Maharagama Urban Council services. Features real-time GPS-enabled garbage truck tracking with citizen notifications, online booking for public properties/vehicles and cemetery slots with integrated payments, one-tap emergency access, push announcements, and an AI chatbot. Built using Flutter/React, Node.js, Firebase (real-time & FCM), Google Maps API, and PayHere gateway to improve efficiency, transparency, and citizen satisfaction.',
        link: '#' // Fill real link
    },
    wavelink: {
        title: 'WaveLink Mobile App',
        description: 'UOW | Sept 2024 - Dec 2024. Gamified ocean conservation platform that turns beach cleanups and marine protection into daily missions with rewards, progress tracking, and social features. Focused on solving plastic waste, low youth engagement, and lack of measurable impact in traditional environmental initiatives.',
        link: '#'
    },
    climate: {
        title: 'Climate Changers - Interactive Climate Awareness Web App',
        description: 'UOW | Feb 2025 - Jun 2025. Designed and developed a fully responsive educational web application to raise climate change awareness. Built interactive data visualizations of global temperature rise and CO₂ emissions using Chart.js, integrated sustainable living tips through dynamic modals, and implemented smooth animations and mobile-first design with HTML, CSS (media queries), and vanilla JavaScript.',
        link: '#'
    },
    traffic: {
        title: 'Traffic Insights and Visualization for Local Governance Planning',
        description: 'UOW | Sept 2024 - Dec 2024. In this project, I developed Python software for analyzing traffic flow data from Elm Avenue/Rabbit Road and Hanley Highway/Westway—two major intersections under local council authority. The app simplifies CSV file selection and analysis, offering detailed insights into vehicle types, traffic patterns, and weather conditions.',
        link: '#'
    },
    construct: {
        title: 'Designing Construct Connect: A Talent Platform for Construction',
        description: 'IIT | Jan 2023 - March 2024. I was a part of in-depth research on talent acquisition in the construction industry, leading to the conceptual design of Construct Connect—a platform bridging job seekers, recruiters, and professionals. Using Figma, I crafted an intuitive frontend UI focused on seamless matching and networking.',
        link: '#'
    }
};

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const modalId = card.dataset.modal;
        const content = modals[modalId];
        document.getElementById('modal-body').innerHTML = `
            <h2>${content.title}</h2>
            <p>${content.description}</p>
            <a href="${content.link}" target="_blank">View Project</a>
        `;
        const modal = document.getElementById('modal');
        modal.style.display = 'flex';
        modal.style.opacity = 0;
        setTimeout(() => { modal.style.opacity = 1; }, 10); // Fade in
    });
});

document.querySelector('.close').addEventListener('click', () => {
    const modal = document.getElementById('modal');
    modal.style.opacity = 0;
    setTimeout(() => { modal.style.display = 'none'; }, 300); // Fade out
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Animations on Scroll (more options)
AOS.init({ duration: 1200, easing: 'ease-in-out' });

// Unique: 3D Tilt on Project Cards
VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.5
});

// Unique: Particles Background
particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#007BFF' },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: '#007BFF', opacity: 0.4, width: 1 },
        move: { enable: true, speed: 6, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
    },
    interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
        modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
    },
    retina_detect: true
});

// Unique: Confetti on Resume Download
document.getElementById('resume-download').addEventListener('click', (e) => {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
});