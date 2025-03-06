// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Navbar Animation
gsap.from('.nav-item', {
    opacity: 0,
    y: -20,
    duration: 0.5,
    stagger: 0.1
});
// const train = document.querySelector('.train');
// // Train Animation
// gsap.to(train, {
//     x: '-100vw',
//     duration: 10,
//     repeat: -1,
//     ease: 'none',
//     onRepeat: () => gsap.set(train, { x: '100vw' }) // Instantly reset to the right
// });
// Hero Content Animation
gsap.from('.hero-content', {
    y: 100,
    opacity: 0,
    duration: 1,
    delay: 0.5
});

// Sidebar Buttons Hover Animation
const leftBtn = document.querySelector('.sidebar-btn.left');
const rightBtn = document.querySelector('.sidebar-btn.right');

leftBtn.addEventListener('mouseenter', () => {
    gsap.to(leftBtn, { x: 60, duration: 0.3 });
});

leftBtn.addEventListener('mouseleave', () => {
    gsap.to(leftBtn, { x: 0, duration: 0.3 });
});

rightBtn.addEventListener('mouseenter', () => {
    gsap.to(rightBtn, { x: -60, duration: 0.3 });
});

rightBtn.addEventListener('mouseleave', () => {
    gsap.to(rightBtn, { x: 0, duration: 0.3 });
});

// Team Members Data
const teamMembers = [
    {
        name: 'A V SUBHASH',
        roll: '23L31A0504',
        email: 'subhashadireddy@gmail.com',
        linkedin: 'https://www.linkedin.com/in/subhash-adireddy-5035132a0/',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShYwM33sSN7MtnLIq0k1qjhpoEtSstLE26gA&s'
    },
    {
        name: 'AAJADH P',
        roll: '23L31A0501',
        email: 'azadpanigrahi469@gmail.com',
        linkedin: 'https://linkedin.com',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShYwM33sSN7MtnLIq0k1qjhpoEtSstLE26gA&s'
    },
    {
        name: 'B GAYATHRI',
        roll: '23L31A0517',
        email: 'gayathriballa108@gmail.com',
        linkedin: 'https://www.linkedin.com/in/gayathri-balla-1397a3324/',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShYwM33sSN7MtnLIq0k1qjhpoEtSstLE26gA&s'
    },
    {
        name: 'CHARAN B',
        roll: '23L31A0522',
        email: 'member4@railway.go',
        linkedin: 'https://linkedin.com',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShYwM33sSN7MtnLIq0k1qjhpoEtSstLE26gA&s'
    },
    {
        name: 'TARUN B',
        roll: '23L31A0532',
        email: 'member5@railway.go',
        linkedin: 'https://linkedin.com',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShYwM33sSN7MtnLIq0k1qjhpoEtSstLE26gA&s'
    },
    {
        name: 'PRAVEEN',
        roll: '24L35A0505',
        email: 'member6@railway.go',
        linkedin: 'https://linkedin.com',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShYwM33sSN7MtnLIq0k1qjhpoEtSstLE26gA&s'
    }
];

// Generate Team Members
const teamGrid = document.querySelector('.team-grid');

teamMembers.forEach(member => {
    const memberElement = document.createElement('div');
    memberElement.className = 'team-member';
    memberElement.innerHTML = `
        <a href="${member.linkedin}" target="_blank">
            <img src="${member.image}" alt="${member.name}">
        </a>
        <h3>${member.name}</h3>
        <p>${member.roll}</p>
        <p>${member.email}</p>
    `;
    teamGrid.appendChild(memberElement);
});
const sections = document.querySelectorAll('.section');

// Scroll Animations
sections.forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: 'top center',
            end: 'bottom center',
            toggleActions: 'play none none reverse'
        },
        y: 100,
        opacity: 0,
        duration: 1
    });
});
// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
// Back to top button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});
backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});