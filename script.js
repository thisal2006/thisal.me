const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggle.innerHTML = document.body.classList.contains('dark-mode') ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

const typed = new Typed('#typed-profile', {
    strings: ['19-year-old ambitious undergraduate at the Informatics Institute of Technology (IIT), pursuing studies in technology since 2023. Early university entrant with a strong foundation in Python programming, Java and web development. Certified in Quantum Computing, Transformer-based NLP, Artificial Intelligence, Cloud Computing (Microsoft Azure), AI Prompt Engineering (DeepLearning.AI), ChatGPT for Developers, and Zero Trust Frameworks. Creative problem-solver blending leadership, adaptability, and a passion for emerging technologies.'],
    typeSpeed: 40,
    loop: false
});

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
        document.getElementById('modal').style.display = 'flex';
    });
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

AOS.init({ duration: 1000 });