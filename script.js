// Dark mode (optional – remove if always dark)
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode'); // You can add light theme later
    toggle.innerHTML = document.body.classList.contains('light-mode') 
        ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Typing Effect
const typed = new Typed('#typed-profile', {
    strings: ['19-year-old ambitious undergraduate at the Informatics Institute of Technology (IIT), pursuing studies in technology since 2023. Early university entrant with a strong foundation in Python programming, Java and web development. Certified in Quantum Computing, Transformer-based NLP, Artificial Intelligence, Cloud Computing (Microsoft Azure), AI Prompt Engineering (DeepLearning.AI), ChatGPT for Developers, and Zero Trust Frameworks. Creative problem-solver blending leadership, adaptability, and a passion for emerging technologies.'],
    typeSpeed: 45,
    loop: false
});

// Skills Radar Chart
const ctx = document.getElementById('skillsRadar').getContext('2d');
const radarChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['Creativity', 'Team Building', 'Communication', 'Problem Solving', 'Leadership', 'Critical Thinking', 'Time Management'],
        datasets: [{
            label: 'Level',
            data: [9, 8, 9, 9, 8, 9, 8],
            backgroundColor: 'rgba(6, 182, 212, 0.2)',
            borderColor: '#00f0ff',
            borderWidth: 1,
            pointBackgroundColor: '#00f0ff'
        }]
    },
    options: {
        scales: {
            r: {
                beginAtZero: true,
                max: 10,
                grid: { color: 'rgba(255,255,255,0.1)' }
            }
        }
    }
});

// Project Modals (same as before)
const modals = {
    muc: {
        title: 'MUC Digital - Smart Municipal Services Platform',
        description: 'SDGP | Sept 2025 - Present. Leading the development of a comprehensive web and mobile platform to fully digitalize Maharagama Urban Council services. Features real-time GPS-enabled garbage truck tracking with citizen notifications, online booking for public properties/vehicles and cemetery slots with integrated payments, one-tap emergency access, push announcements, and an AI chatbot. Built using Flutter/React, Node.js, Firebase (real-time & FCM), Google Maps API, and PayHere gateway to improve efficiency, transparency, and citizen satisfaction.',
        link: '#'
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
        setTimeout(() => { modal.style.opacity = 1; }, 10);
    });
});

document.querySelector('.close').addEventListener('click', () => {
    const modal = document.getElementById('modal');
    modal.style.opacity = 0;
    setTimeout(() => { modal.style.display = 'none'; }, 300);
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Animations on Scroll
AOS.init({ duration: 1000, once: true });

// 3D Tilt on Project Cards
if (typeof VanillaTilt !== 'undefined') {
    VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.5
    });
}

// Particles Background – tuned for cyan/neon
if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
        particles: {
            number: { value: 60 },
            color: { value: '#00f0ff' },
            shape: { type: 'circle' },
            opacity: { value: 0.5 },
            size: { value: 3 },
            line_linked: { 
                enable: true, 
                distance: 120, 
                color: '#06b6d4', 
                opacity: 0.4, 
                width: 1 
            },
            move: { enable: true, speed: 3 }
        },
        interactivity: { 
            events: { 
                onhover: { 
                    enable: true, 
                    mode: 'grab' 
                } 
            } 
        }
    });
}

// Confetti on Resume Download
const resumeDownloadBtn = document.getElementById('resume-download');
if (resumeDownloadBtn) {
    resumeDownloadBtn.addEventListener('click', (e) => {
        if (typeof confetti !== 'undefined') {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        }
    });
}

// Close modal when clicking outside
document.getElementById('modal').addEventListener('click', (e) => {
    if (e.target.id === 'modal') {
        const modal = document.getElementById('modal');
        modal.style.opacity = 0;
        setTimeout(() => { modal.style.display = 'none'; }, 300);
    }
});